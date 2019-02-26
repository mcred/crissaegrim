package com.grindaga.crissaegrim

import java.io.InputStream
import org.apache.commons.io.IOUtils

data class Card(
    val slots: List<Slot>
) {
    companion object {
        @JvmStatic
        fun load(saveFile: InputStream): Card {
            val byteArray = IOUtils.toByteArray(saveFile)
            var slots = mutableListOf<Slot>()
            for (i in 0..15) {
                val bottom = i * 0x2000
                val top = bottom + 0x1999
                slots.add(Slot(byteArray.sliceArray(bottom..top)))
            }
            val card = Card(slots)
            return card
        }
    }
}

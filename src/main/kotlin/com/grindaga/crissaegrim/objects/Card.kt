package com.grindaga.crissaegrim.objects

import java.io.InputStream
import org.apache.commons.io.IOUtils

data class Card(
    val fileLocation: String,
    val slots: List<Slot>
) {
    companion object {
        @JvmStatic
        fun load(fileLocation: String, saveFile: InputStream): Card {
            val byteArray = IOUtils.toByteArray(saveFile)
            val slots = mutableListOf<Slot>()
            for (i in 0..15) {
                val bottom = i * 0x2000
                val top = bottom + 0x1999
                slots.add(Slot(byteArray.sliceArray(bottom..top)))
            }
           return Card(fileLocation, slots)
        }
    }
}

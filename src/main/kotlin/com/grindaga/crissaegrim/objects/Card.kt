package com.grindaga.crissaegrim.objects

import org.apache.commons.io.IOUtils
import java.io.File

data class Card(
    val fileLocation: String,
    val slots: List<Slot>
) {

    fun toRaw(): ByteArray {
        val output = ByteArray(0x20000)
        for (slot in slots) {
            var position = slot.rootAddress
            for(byte in slot.data){
                output[position] = byte
                position++
            }
        }
        return output
    }

    companion object {
        @JvmStatic
        fun load(fileLocation: String): Card {
            val saveFile = File(fileLocation).inputStream()
            val byteArray = IOUtils.toByteArray(saveFile)
            val slots = mutableListOf<Slot>()
            for (i in 0..15) {
                val bottom = i * 0x2000
                val top = bottom + 0x1FFF
                slots.add(Slot(bottom, byteArray.sliceArray(bottom..top)))
            }
           return Card(fileLocation, slots)
        }
    }
}

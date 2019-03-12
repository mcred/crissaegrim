package com.grindaga.crissaegrim.objects

import com.grindaga.crissaegrim.utils.Numeric
import com.grindaga.crissaegrim.model.Location

data class Slot(
    val rootAddress: Int,
    val data: ByteArray
) {
    fun getValueAtPosition(position: Int) : Byte {
        return data[position]
    }

    fun setValueAtPosition(position: Int, value: Byte) {
        data[position] = value
    }

    fun getValueByRange(range: IntRange): ByteArray {
        return data.sliceArray(range)
    }

    fun getReversedValueByRange(range: IntRange): ByteArray {
        return data.sliceArray(range).reversedArray()
    }

    fun getValueByLocation(location: Location): ByteArray {
        if (location.reverseBytes) {
            return getReversedValueByRange(location.getRange())
        } else {
            return getValueByRange(location.getRange())
        }
    }

    fun read(location: Location): Int {
        val bytes = when(location.reverseBytes){
            true -> getReversedValueByRange(location.getRange())
            else -> getValueByRange(location.getRange())
        }
        //TODO return proper type from read
        /*
        return when(location.type){
            "Text" -> Text(bytes).output()
            else -> Numeric(bytes).output()
        }
        */
        return Numeric(bytes).output()
    }

    fun write(location: Location, value: Int) {
        val hexInt = Integer.toHexString(value).padStart((2 * (location.length + 1)), '0')
        val byteArray = when (location.reverseBytes) {
            true -> hexInt.chunked(2).reversed()
            else -> hexInt.chunked(2)
        }
        var address = location.address
        for (byte in byteArray) {
            val byteAsInt: Int = byte.toInt(16)
            setValueAtPosition(address, byteAsInt.toByte())
            address++
        }
    }
}

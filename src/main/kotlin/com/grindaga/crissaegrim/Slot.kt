package com.grindaga.crissaegrim

import com.grindaga.crissaegrim.objects.Location

data class Slot(
    val data: ByteArray
) {
    fun getValueAtPosition(position: Int) : Byte {
        return data[position]
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
}

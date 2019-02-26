package com.grindaga.crissaegrim.objects

data class Location(
    val address: Int,
    val length: Int = 0,
    val reverseBytes: Boolean = false
) {
    fun getRange(): IntRange {
        return address..(address + length)
    }
}

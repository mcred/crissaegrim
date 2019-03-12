package com.grindaga.crissaegrim.model

interface Location {
    val name: String
    val value: Int
    val address: Int
    val length: Int
    val reverseBytes: Boolean
    val type: String
    fun getRange(): IntRange
}
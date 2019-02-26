package com.grindaga.crissaegrim.utils

import org.apache.commons.codec.binary.Hex

data class Numeric(
    override val bytes: ByteArray
): Converter {
    override fun output(): Int {
        val hex: String = Hex.encodeHexString(bytes)
        return hex.toInt(16)
    }
}

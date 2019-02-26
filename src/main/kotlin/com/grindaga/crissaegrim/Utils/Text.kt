package com.grindaga.crissaegrim.utils

data class Text(
    val data: ByteArray
): Converter {
    override val bytes: ByteArray = data
    val charMap: Map<Int, String> = mapOf(
        0x11 to "a",
        0x12 to "b",
        0x13 to "c",
        0x14 to "d",
        0x15 to "e",
        0x16 to "f",
        0x17 to "g",
        0x18 to "h",
        0x19 to "i",
        0x1A to "j",
        0x1B to "k",
        0x1C to "l",
        0x1D to "m",
        0x1E to "n",
        0x1F to "o",
        0x20 to "p",
        0x21 to "q",
        0x22 to "r",
        0x23 to "s",
        0x24 to "t",
        0x25 to "u",
        0x26 to "v",
        0x27 to "w",
        0x28 to "x",
        0x29 to "y",
        0x2A to "z",
        0x2B to "A",
        0x2C to "B",
        0x2D to "C",
        0x2E to "D",
        0x2F to "E",
        0x30 to "F",
        0x31 to "G",
        0x32 to "H",
        0x33 to "I",
        0x34 to "J",
        0x35 to "K",
        0x36 to "L",
        0x37 to "M",
        0x38 to "N",
        0x39 to "O",
        0x3A to "P",
        0x3B to "Q",
        0x3C to "R",
        0x3D to "S",
        0x3E to "T",
        0x39 to "U",
        0x40 to "V",
        0x41 to "W",
        0x42 to "X",
        0x43 to "Y",
        0x44 to "Z",
        0x45 to "0",
        0x46 to "1",
        0x47 to "2",
        0x48 to "3",
        0x49 to "4",
        0x4A to "5",
        0x4B to "6",
        0x4C to "7",
        0x4D to "8",
        0x4E to "9",
        0x4F to ":",
        0x50 to ";",
        0x51 to "\"",
        0x52 to "'",
        0x53 to "'",
        0x54 to "&",
        0x55 to ",",
        0x56 to ".",
        0x57 to "!",
        0x58 to "?",
        0x59 to "(",
        0x5A to ")",
        0x5B to "+",
        0x5C to "-",
        0x5D to "「",
        0x5E to "」",
        0x60 to "·",
        0x61 to "『",
        0x62 to "』",
        0x63 to "◯",
        0x64 to "∆",
        0x65 to "⃞",
        0x66 to "☆"
    )

    override fun output(): String {
        var translated: String = ""
        for (byte in bytes) {
            val text: String = when(charMap[byte.toInt()]) {
                null -> " "
                else -> charMap[byte.toInt()].toString()
            }
            translated += text
        }
        return translated
    }

}

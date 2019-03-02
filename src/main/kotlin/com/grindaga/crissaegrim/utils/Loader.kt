package com.grindaga.crissaegrim.utils

import com.grindaga.crissaegrim.objects.*
import com.grindaga.crissaegrim.maps.*
import java.io.File

class Loader {

    fun loadCard(fileLocation: String): Card {
        val saveFile = File(fileLocation).inputStream()
        return Card.load(fileLocation, saveFile)
    }

    /*
    val stats: Stats = Stats()
    println("HP: ${stats.HP}")


    for ((key, location) in pointers) {
        if (location.reverseBytes) {
            val hexVal: ByteArray = slot.getReversedValueByRange(location.getRange())
            val result: Numeric = Numeric(hexVal)
            println("${key}: ${result.output()}")
        } else {
            val hexVal: ByteArray = slot.getValueByRange(location.getRange())
            val result: Numeric = Numeric(hexVal)
            println("${key}: ${result.output()}")
        }
    }
    */
}

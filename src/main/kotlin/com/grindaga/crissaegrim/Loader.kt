package com.grindaga.crissaegrim

import com.grindaga.crissaegrim.utils.*
import com.grindaga.crissaegrim.maps.*

object Loader {

    @JvmStatic
    fun main(args: Array<String>) {
        val saveFile = this::class.java.classLoader.getResourceAsStream("saves/SampleSave.mcr")
        val card: Card = Card.load(saveFile)
        val slot: Slot = card.slots[1]

        val stats: Stats = Stats()

        println("HP: ${stats.HP}")

        /*
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
}

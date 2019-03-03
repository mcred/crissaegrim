package com.grindaga.crissaegrim.utils

import com.grindaga.crissaegrim.objects.*
import com.grindaga.crissaegrim.maps.*
import java.io.File

class Loader {

    /*
    fun getStats(slot: Slot): StatObj{
        val statMap = Stats()
        return StatObj(
            Numeric(slot.getValueByRange(statMap.HP.getRange())).output(),
            Numeric(slot.getValueByRange(statMap.HPMax.getRange())).output(),
            Numeric(slot.getValueByRange(statMap.Hearts.getRange())).output(),
            Numeric(slot.getValueByRange(statMap.HeartsMax.getRange())).output(),
            Numeric(slot.getValueByRange(statMap.MP.getRange())).output(),
            Numeric(slot.getValueByRange(statMap.MPMax.getRange())).output(),
            Numeric(slot.getValueByRange(statMap.STR.getRange())).output(),
            Numeric(slot.getValueByRange(statMap.CON.getRange())).output(),
            Numeric(slot.getValueByRange(statMap.INT.getRange())).output(),
            Numeric(slot.getValueByRange(statMap.LCK.getRange())).output(),
            Numeric(slot.getValueByRange(statMap.ATTBonus.getRange())).output()
        )
    }

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

package com.grindaga.crissaegrim.controllers

import com.grindaga.crissaegrim.maps.StatsMap
import com.grindaga.crissaegrim.model.StatsScope
import com.grindaga.crissaegrim.objects.Slot
import tornadofx.*

class StatsController: Controller() {
    val statsScope = StatsScope()
    val statMap = StatsMap()
    val stats = statsScope.stats

    init {
        stats.HP.setValue(0)
        stats.HPMax.setValue(0)
        stats.Hearts.setValue(0)
        stats.HeartsMax.setValue(0)
        stats.MP.setValue(0)
        stats.MPMax.setValue(0)
        stats.STR.setValue(0)
        stats.CON.setValue(0)
        stats.INT.setValue(0)
        stats.LCK.setValue(0)
        stats.ATTBonus.setValue(0)
    }

    fun loadFromSlot(slot: Slot) {
        stats.HP.setValue(slot.read(statMap.HP))
        stats.HPMax.setValue(slot.read(statMap.HPMax))
        stats.Hearts.setValue(slot.read(statMap.Hearts))
        stats.HeartsMax.setValue(slot.read(statMap.HeartsMax))
        stats.MP.setValue(slot.read(statMap.MP))
        stats.MPMax.setValue(slot.read(statMap.MPMax))
        stats.STR.setValue(slot.read(statMap.STR))
        stats.CON.setValue(slot.read(statMap.CON))
        stats.INT.setValue(slot.read(statMap.INT))
        stats.LCK.setValue(slot.read(statMap.LCK))
        stats.ATTBonus.setValue(slot.read(statMap.ATTBonus))
    }

    fun writeToSlot(slot: Slot) {
        slot.write(statMap.HP, stats.HP.value.toInt())
        slot.write(statMap.HPMax, stats.HP.value.toInt())
        slot.write(statMap.Hearts, stats.Hearts.value.toInt())
        slot.write(statMap.HeartsMax, stats.HeartsMax.value.toInt())
        slot.write(statMap.MP, stats.MP.value.toInt())
        slot.write(statMap.MPMax, stats.MPMax.value.toInt())
        slot.write(statMap.STR, stats.STR.value.toInt())
        slot.write(statMap.CON, stats.CON.value.toInt())
        slot.write(statMap.INT, stats.INT.value.toInt())
        slot.write(statMap.LCK, stats.LCK.value.toInt())
        slot.write(statMap.ATTBonus, stats.ATTBonus.value.toInt())
    }
}
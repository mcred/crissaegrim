package com.grindaga.crissaegrim.controllers

import com.grindaga.crissaegrim.model.StatsScope
import com.grindaga.crissaegrim.model.Stat
import com.grindaga.crissaegrim.objects.Slot
import tornadofx.*

class StatsController: Controller() {
    val statsScope = StatsScope()
    val stats = statsScope.stats

    init {
        stats.add(Stat("HP", 0, 0x474, 1, true))
        stats.add(Stat("HPMax", 0, 0x478, 1, true))
        stats.add(Stat("Hearts", 0, 0x47C, 1, true))
        stats.add(Stat("HeartsMax", 0, 0x480, 1, true))
        stats.add(Stat("MP", 0, 0x484, 1, true))
        stats.add(Stat("MPMax", 0, 0x488, 1, true))
        stats.add(Stat("STR", 0, 0x48C))
        stats.add(Stat("CON", 0, 0x490))
        stats.add(Stat("INT", 0, 0x494))
        stats.add(Stat("LCK", 0, 0x498))
        stats.add(Stat("ATTBonus", 0, 0x49))
    }

    fun loadFromSlot(slot: Slot) {
        for (stat in stats) {
            stat.value = slot.read(stat)
        }
    }

    fun writeToSlot(slot: Slot) {
        for (stat in stats) {
            slot.write(stat, stat.value)
        }
    }
}
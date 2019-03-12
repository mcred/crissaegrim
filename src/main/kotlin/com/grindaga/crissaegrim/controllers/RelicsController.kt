package com.grindaga.crissaegrim.controllers

import com.grindaga.crissaegrim.model.Relic
import com.grindaga.crissaegrim.model.RelicsScope
import com.grindaga.crissaegrim.objects.Slot
import tornadofx.*

class RelicsController: Controller() {
    val relicsScope = RelicsScope()
    val relics = relicsScope.relics

    init {
        relics.add(Relic("soulOfBat", 0, 0x238))
        relics.add(Relic("fireOfBat", 0, 0x239))
        relics.add(Relic("echoOfBat", 0, 0x23A))
        relics.add(Relic("forceOfEcho", 0, 0x23B))
        relics.add(Relic("soulOfWolf", 0, 0x23C))
        relics.add(Relic("powerOfWolf", 0, 0x23D))
        relics.add(Relic("skillOfWolf", 0, 0x23E))
        relics.add(Relic("formOfMist", 0, 0x23F))
        relics.add(Relic("powerOfMist", 0, 0x240))
        relics.add(Relic("gasCloud", 0, 0x241))
        relics.add(Relic("cubeOfZoe", 0, 0x242))
        relics.add(Relic("spiritOrb", 0, 0x243))
        relics.add(Relic("gravityBoots", 0, 0x244))
        relics.add(Relic("leapStone", 0, 0x245))
        relics.add(Relic("holySymbol", 0, 0x246))
        relics.add(Relic("faerieScroll", 0, 0x247))
        relics.add(Relic("jewelOfOpen", 0, 0x248))
        relics.add(Relic("mermanStatue", 0, 0x249))
        relics.add(Relic("batCard", 0, 0x24A))
        relics.add(Relic("ghostCard", 0, 0x24B))
        relics.add(Relic("faerieCard", 0, 0x24C))
        relics.add(Relic("demonCard", 0, 0x24D))
        relics.add(Relic("swordCard", 0, 0x24E))
        relics.add(Relic("heartOfVlad", 0, 0x24F))
        relics.add(Relic("toothOfVlad", 0, 0x250))
        relics.add(Relic("ribOfVlad", 0, 0x251))
        relics.add(Relic("ringOfVlad", 0, 0x252))
        relics.add(Relic("eyeOfVlad", 0, 0x253))
    }

    fun loadFromSlot(slot: Slot) {
        for (relic in relics) {
            relic.value = slot.read(relic)
        }
    }

    fun writeToSlot(slot: Slot) {
        for (relic in relics) {
            slot.write(relic, relic.value)
        }
    }
}
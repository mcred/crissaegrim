package com.grindaga.crissaegrim.views

import com.grindaga.crissaegrim.controllers.RelicsController
import com.grindaga.crissaegrim.controllers.StatsController
import com.grindaga.crissaegrim.model.Relics
import tornadofx.*

class StatsView : View("My View") {
    private val statsCtrl: StatsController by inject()
    private val stats = statsCtrl.stats
    private val relicsCtrl: RelicsController by inject()
    private val relics = relicsCtrl.relics

    override val root = tabpane {
        useMaxWidth = true

        tab("Stats") {
            isClosable = false
            tabMinWidth= 800.0/3

            form {
                fieldset("Character Stats") {
                    field("HP") { textfield ( stats.HP ) }
                    field("HPMax") { textfield ( stats.HPMax ) }
                    field("Hearts") { textfield ( stats.Hearts ) }
                    field("HeartsMax") { textfield ( stats.HeartsMax ) }
                    field("MP") { textfield ( stats.MP ) }
                    field("MPMax") { textfield ( stats.MPMax ) }
                    field("STR") { textfield ( stats.STR ) }
                    field("CON") { textfield ( stats.CON ) }
                    field("INT") { textfield ( stats.INT ) }
                    field("LCK") { textfield ( stats.LCK ) }
                    field("ATTBonus") { textfield ( stats.ATTBonus ) }
                }
            }
        }
        tab("Equipment") {
            isClosable = false
            tabMinWidth= 800.0/3

        }
        tab("Relics") {
            isClosable = false
            tabMinWidth= 800.0/3

            form {
                fieldset("Relics") {
                    field("soulOfBat") {textfield (relics.soulOfBat) }
                    field("fireOfBat") {textfield (relics.fireOfBat) }
                    field("echoOfBat") {textfield (relics.echoOfBat) }
                    field("forceOfEcho") {textfield (relics.forceOfEcho) }
                    field("soulOfWolf") {textfield (relics.soulOfWolf) }
                    field("powerOfWolf") {textfield (relics.powerOfWolf) }
                    field("skillOfWolf") {textfield (relics.skillOfWolf) }
                    field("formOfMist") {textfield (relics.formOfMist) }
                    field("powerOfMist") {textfield (relics.powerOfMist) }
                    field("gasCloud") {textfield (relics.gasCloud) }
                    field("cubeOfZoe") {textfield (relics.cubeOfZoe) }
                    field("spiritOrb") {textfield (relics.spiritOrb) }
                    field("gravityBoots") {textfield (relics.gravityBoots) }
                    field("leapStone") {textfield (relics.leapStone) }
                    field("holySymbol") {textfield (relics.holySymbol) }
                    field("faerieScroll") {textfield (relics.faerieScroll) }
                    field("jewelOfOpen") {textfield (relics.jewelOfOpen) }
                    field("mermanStatue") {textfield (relics.mermanStatue) }
                    field("batCard") {textfield (relics.batCard) }
                    field("ghostCard") {textfield (relics.ghostCard) }
                    field("faerieCard") {textfield (relics.faerieCard) }
                    field("demonCard") {textfield (relics.demonCard) }
                    field("swordCard") {textfield (relics.swordCard) }
                    field("heartOfVlad") {textfield (relics.heartOfVlad) }
                    field("toothOfVlad") {textfield (relics.toothOfVlad) }
                    field("ribOfVlad") {textfield (relics.ribOfVlad) }
                    field("ringOfVlad") {textfield (relics.ringOfVlad) }
                    field("eyeOfVlad") {textfield (relics.eyeOfVlad) }
                }
            }
        }

    }
}



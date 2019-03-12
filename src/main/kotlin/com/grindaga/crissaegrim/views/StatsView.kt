package com.grindaga.crissaegrim.views

import com.grindaga.crissaegrim.controllers.EquipmentController
import com.grindaga.crissaegrim.controllers.RelicsController
import com.grindaga.crissaegrim.controllers.StatsController
import javafx.scene.control.TextFormatter
import tornadofx.*

class StatsView : View("My View") {
    private val statsCtrl: StatsController by inject()
    private val stats = statsCtrl.stats
    private val relicsCtrl: RelicsController by inject()
    private val relics = relicsCtrl.relics
    private val equipmentCrl: EquipmentController by inject()
    private val equipment = equipmentCrl.equipment

    private val tabWidth = 740.0/3

    private val eightBitFilter: (TextFormatter.Change) -> Boolean = { change ->
        !change.isAdded || change.controlNewText.let {
            it.isInt() && it.toInt() in 0..255
        }
    }

    private val sixteenBitFilter: (TextFormatter.Change) -> Boolean = { change ->
        !change.isAdded || change.controlNewText.let {
            val removedComma = it.replace(",", "")
            removedComma.isInt() && removedComma.toInt() in 0..65535
        }
    }

    override val root = tabpane {
        useMaxWidth = true

        tab("Stats") {
            isClosable = false
            tabMinWidth = tabWidth
            tabMaxWidth = tabWidth

        }
        tab("Equipment") {
            isClosable = false
            tabMinWidth = tabWidth
            tabMaxWidth = tabWidth

        }
        tab("Relics") {
            isClosable = false
            tabMinWidth = tabWidth
            tabMaxWidth = tabWidth

            form {
                hbox(80) {
                    fieldset("Relics") {
                        hbox(80) {
                            vbox {
                                var count: Int = 0
                                for (relic in relics) {
                                    val row: Int = count % 2
                                    if (row == 0) {
                                        field(relic.name) {
                                            togglegroup {
                                                togglebutton("Not Found", this, true, 0)
                                                togglebutton("Off", this, false, 1)
                                                togglebutton("On", this, false, 3)
                                                bind(relic.valueProperty)
                                            }
                                        }
                                    }
                                    count++
                                }
                            }
                            vbox {
                                var count: Int = 0
                                for (relic in relics) {
                                    val row: Int = count % 2
                                    if (row == 1) {
                                        field(relic.name) {
                                            togglegroup {
                                                togglebutton("Not Found", this, true, 0)
                                                togglebutton("Off", this, false, 1)
                                                togglebutton("On", this, false, 3)
                                                bind(relic.valueProperty)
                                            }
                                        }
                                    }
                                    count++
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}



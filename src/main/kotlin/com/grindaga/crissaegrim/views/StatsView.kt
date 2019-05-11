package com.grindaga.crissaegrim.views

import com.grindaga.crissaegrim.controllers.EquipmentController
import com.grindaga.crissaegrim.controllers.RelicsController
import com.grindaga.crissaegrim.controllers.StatsController
import com.grindaga.crissaegrim.model.Equipment
import com.grindaga.crissaegrim.model.Stat
import javafx.beans.property.Property
import javafx.scene.control.TableView
import javafx.scene.control.TextField
import javafx.scene.control.TextFormatter
import tornadofx.*

class StatsView : View("My View") {
    private val statsCtrl: StatsController by inject()
    private val stats = statsCtrl.stats
    private val relicsCtrl: RelicsController by inject()
    private val relics = relicsCtrl.relics
    private val equipmentCrl: EquipmentController by inject()
    private val equipment = equipmentCrl.equipment


    var nameField : TextField by singleAssign()
    var valueField : TextField by singleAssign()
    var statTable : TableView<Stat> by singleAssign()
    var prevSelection: Stat? = null

    var equipmentName : TextField by singleAssign()
    var equipmentValue : TextField by singleAssign()
    var equipmentTable : TableView<Equipment> by singleAssign()
    var prevEquipent: Equipment? = null

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

    private fun humpToCaps(hump: String): String {
        var retString: String = ""
        for (letter in hump) {
            retString += when {
                letter.isUpperCase() -> " $letter"
                else -> letter
            }
        }
        return retString.capitalize()
    }

    private fun editStat(stat: Stat?) {
        if (stat != null) {
            prevSelection?.apply {
                nameProperty.unbindBidirectional(nameField.textProperty())
                valueProperty.unbindBidirectional(valueField.textProperty() as Property<Number>)
            }
            nameField.bind(stat.nameProperty)
            valueField.bind(stat.valueProperty)
            prevSelection = stat
        }
    }

    private fun editEquipment(equipment: Equipment?){
        if (equipment != null) {
            prevSelection?.apply {
                nameProperty.unbindBidirectional(equipmentName.textProperty())
                valueProperty.unbindBidirectional(equipmentValue.textProperty() as Property<Number>)
            }
            equipmentName.bind(equipment.nameProperty)
            equipmentValue.bind(equipment.valueProperty)
            prevEquipent = equipment
        }
    }

    override val root = tabpane {
        useMaxWidth = true

        tab("Stats") {
            isClosable = false
            tabMinWidth = tabWidth
            tabMaxWidth = tabWidth

            borderpane{
                center {
                    tableview(stats) {
                        statTable = this
                        column("Stat", Stat::nameProperty)
                        column("Value", Stat::valueProperty)

                        selectionModel.selectedItemProperty().onChange {
                            editStat(it)
                            prevSelection = it
                        }
                    }
                }

                right {
                    form {
                        fieldset("Edit Stat") {
                            field("") {
                                textfield() {
                                    isEditable = false
                                    nameField = this
                                }
                            }
                            field("") {
                                textfield() {
                                    valueField = this
                                }
                            }
                        }
                    }
                }
            }
        }
        tab("Equipment") {
            isClosable = false
            tabMinWidth = tabWidth
            tabMaxWidth = tabWidth

            borderpane{
                center {
                    tableview(equipment) {
                        equipmentTable = this
                        column("Equipment", Equipment::nameProperty)
                        column("Quantity", Equipment::valueProperty)

                        selectionModel.selectedItemProperty().onChange {
                            editEquipment(it)
                            prevEquipent = it
                        }
                    }
                }

                right {
                    form {
                        fieldset("Edit Equipment") {
                            field("") {
                                textfield() {
                                    isEditable = false
                                    equipmentName = this
                                }
                            }
                            field("") {
                                textfield() {
                                    equipmentValue = this
                                }
                            }
                        }
                    }
                }
            }

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
                                        field(humpToCaps(relic.name)) {
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
                                        field(humpToCaps(relic.name)) {
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



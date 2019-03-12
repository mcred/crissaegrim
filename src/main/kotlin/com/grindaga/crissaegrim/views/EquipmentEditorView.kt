package com.grindaga.crissaegrim.views

import com.grindaga.crissaegrim.controllers.EquipmentController
import com.grindaga.crissaegrim.model.Equipment
import javafx.beans.property.Property
import javafx.scene.control.TableView
import javafx.scene.control.TextField
import javafx.scene.control.TextFormatter
import javafx.scene.layout.BorderPane
import tornadofx.*

class EquipmentEditorView : View("My View") {
    override val root = BorderPane()
    private val equipmentCtrl: EquipmentController by inject()
    private val equipment = equipmentCtrl.equipment

    var nameField : TextField by singleAssign()
    var valueField : TextField by singleAssign()
    var statTable : TableView<Equipment> by singleAssign()
    var prevSelection: Equipment? = null

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

    init {
        with(root) {
            center {
                tableview(equipment) {
                    statTable = this
                    column("Equipment", Equipment::nameProperty)
                    column("Quantity", Equipment::valueProperty)

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

    private fun editStat(equipment: Equipment?) {
        if (equipment != null) {
            prevSelection?.apply {
                nameProperty.unbindBidirectional(nameField.textProperty())
                valueProperty.unbindBidirectional(valueField.textProperty() as Property<Number>)
            }
            nameField.bind(equipment.nameProperty)
            valueField.bind(equipment.valueProperty)
            prevSelection = equipment
        }
    }
}


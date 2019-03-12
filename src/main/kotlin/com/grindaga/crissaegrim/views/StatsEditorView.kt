package com.grindaga.crissaegrim.views

import com.grindaga.crissaegrim.controllers.StatsController
import com.grindaga.crissaegrim.model.Stat
import javafx.beans.property.Property
import tornadofx.*
import javafx.scene.control.TableView
import javafx.scene.control.TextField
import javafx.scene.control.TextFormatter
import javafx.scene.layout.BorderPane

class StatsEditorView : View("My View") {
    override val root = BorderPane()
    private val statsCtrl: StatsController by inject()
    private val stats = statsCtrl.stats

    var nameField : TextField by singleAssign()
    var valueField : TextField by singleAssign()
    var statTable : TableView<Stat> by singleAssign()
    var prevSelection: Stat? = null

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
}


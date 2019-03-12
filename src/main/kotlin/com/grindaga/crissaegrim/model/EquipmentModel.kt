package com.grindaga.crissaegrim.model

import javafx.beans.property.SimpleIntegerProperty
import javafx.beans.property.SimpleStringProperty
import tornadofx.*

class Equipment(
        name: String,
        value: Int,
        override val address: Int,
        override val length: Int = 0,
        override val reverseBytes: Boolean = false,
        override val type: String = "Numeric"
): Location {
    val nameProperty = SimpleStringProperty(this, "name", name)
    override var name by nameProperty

    val valueProperty = SimpleIntegerProperty(this, "value", value)
    override var value by valueProperty

    override fun getRange(): IntRange {
        return address..(address + length)
    }
}

class EquipmentScope : Scope() {
    val equipment = mutableListOf<Equipment>().observable()
}
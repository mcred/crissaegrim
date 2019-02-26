package com.grindaga.crissaegrim.Views

import javafx.beans.property.SimpleIntegerProperty
import javafx.scene.control.Label
import javafx.scene.layout.BorderPane
import tornadofx.*

class HelloWorld : View() {
    override val root : BorderPane by fxml("/Views/HelloWorld.fxml")
    val counter = SimpleIntegerProperty()
    val counterInfo: Label by fxid()

    init {
        title = "Counter"
        counterInfo.bind(counter)
    }

    fun increment() {
        counter.value += 1
    }
}
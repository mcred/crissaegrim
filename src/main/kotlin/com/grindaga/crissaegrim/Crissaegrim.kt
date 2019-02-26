package com.grindaga.crissaegrim

import tornadofx.*
import javafx.scene.text.FontWeight
import com.grindaga.crissaegrim.Views.*

class Crissaegrim : App(
        HelloWorld::class,
        Styles::class
)

class Styles : Stylesheet() {
    init {
        label {
            fontSize = 20.px
            fontWeight = FontWeight.BOLD
            backgroundColor += c("#cecece")
        }
    }
}

fun main(args: Array<String>) {
    launch<Crissaegrim>(args)
}
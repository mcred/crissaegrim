package com.grindaga.crissaegrim

import tornadofx.*
import com.grindaga.crissaegrim.views.*
import javafx.stage.Stage

class Crissaegrim : App(){
    val WINDOW_WIDTH: Double = 800.0
    val WINDOW_HEIGHT: Double = 600.0
    override val primaryView = MainView::class

    override fun start(stage: Stage) {
        super.start(stage)
        stage.isFullScreen = false
        stage.minWidth  = WINDOW_WIDTH
        stage.minHeight = WINDOW_HEIGHT
        stage.maxHeight = WINDOW_HEIGHT
        stage.maxWidth = WINDOW_WIDTH
    }
}

fun main(args: Array<String>) {
    launch<Crissaegrim>(args)
}
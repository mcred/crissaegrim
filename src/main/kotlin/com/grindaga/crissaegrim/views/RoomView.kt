package com.grindaga.crissaegrim.views

import tornadofx.*
import javafx.scene.paint.Color

class RoomView : View("My View") {
    val numbers = (0x1..0x3C).toList()

    override val root = (
        datagrid(numbers) {
            cellHeight = 3.0
            cellWidth = 3.0

            cellCache {
                stackpane {
                    //label(it.toString(16))
                    children.style {
                        fontSize = 4.px
                        backgroundColor += c("black")
                        backgroundInsets += box(0.px)
                        padding = box(0.px)
                    }
                }
            }
        }
    )
}

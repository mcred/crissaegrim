package com.grindaga.crissaegrim.views

import com.grindaga.crissaegrim.controllers.MessageController
import javafx.geometry.Pos
import tornadofx.*

class FooterView : View("My View") {
    private val messageController: MessageController by inject()
    private val message = messageController.message

    override val root = hbox {
        alignment = Pos.CENTER_LEFT

        label {
            alignment = Pos.CENTER_LEFT
            paddingHorizontal = 8
            paddingVertical = 6

            this.textProperty().bind(message.message)
        }
    }
}

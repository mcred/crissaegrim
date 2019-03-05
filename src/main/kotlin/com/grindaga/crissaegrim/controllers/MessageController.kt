package com.grindaga.crissaegrim.controllers

import com.grindaga.crissaegrim.model.MessageScope
import javafx.application.Platform
import tornadofx.*
import kotlinx.coroutines.*

class MessageController: Controller() {
    val messageScope = MessageScope()
    val message = messageScope.message

    init {
        message.message.setValue("")
    }

    fun fire(text: String) {
        message.message.setValue(text)

        GlobalScope.launch {
            delay(5000L)
            Platform.runLater(Runnable { message.message.setValue("") })
        }
    }
}
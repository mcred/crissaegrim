package com.grindaga.crissaegrim.model

import javafx.beans.property.SimpleStringProperty
import tornadofx.*

class Message(
    message: String
){
    val messageProperty = SimpleStringProperty()
    var message by messageProperty
}

class MessageModel(message: Message? = null) : ItemViewModel<Message>(message) {
    val message = bind(Message::messageProperty)
}

class MessageScope : Scope() {
    val message = MessageModel()
}
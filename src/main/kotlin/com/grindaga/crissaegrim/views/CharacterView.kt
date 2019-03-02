package com.grindaga.crissaegrim.views

import tornadofx.*

class CharacterView : View("My View") {

    override val root = form {
        fieldset("Character Stats") {
            field("HP") {
                textfield()
            }
        }
    }
}

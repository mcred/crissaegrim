package com.grindaga.crissaegrim.views

import com.grindaga.crissaegrim.controllers.StatsController
import tornadofx.*

class StatsView : View("My View") {
    private val statsCtrl: StatsController by inject()
    private val stats = statsCtrl.stats

    override val root = form {
        fieldset("Character Stats") {
            field("HP") {
                textfield(stats.hp)
            }
            field("HP Max") {
                textfield(stats.hpMax)
            }
        }
    }
}



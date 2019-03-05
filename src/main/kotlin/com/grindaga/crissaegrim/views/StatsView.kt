package com.grindaga.crissaegrim.views

import com.grindaga.crissaegrim.controllers.StatsController
import tornadofx.*

class StatsView : View("My View") {
    private val statsCtrl: StatsController by inject()
    private val stats = statsCtrl.stats

    override val root = form {
        fieldset("Character Stats") {
            field("HP") { textfield ( stats.HP ) }
            field("HPMax") { textfield ( stats.HPMax ) }
            field("Hearts") { textfield ( stats.Hearts ) }
            field("HeartsMax") { textfield ( stats.HeartsMax ) }
            field("MP") { textfield ( stats.MP ) }
            field("MPMax") { textfield ( stats.MPMax ) }
            field("STR") { textfield ( stats.STR ) }
            field("CON") { textfield ( stats.CON ) }
            field("INT") { textfield ( stats.INT ) }
            field("LCK") { textfield ( stats.LCK ) }
            field("ATTBonus") { textfield ( stats.ATTBonus ) }
        }
    }
}



package com.grindaga.crissaegrim.model

import javafx.beans.property.SimpleIntegerProperty
import tornadofx.*

class Stats(){
    constructor(hp: Int): this() {
        this.hp = hp
    }

    val hpProperty = SimpleIntegerProperty()
    var hp by hpProperty
}

class StatsModel(stats: Stats? = null) : ItemViewModel<Stats>(stats) {
    val hp = bind(Stats::hpProperty)
}

class StatsScope : Scope() {
    val stats = StatsModel()
}
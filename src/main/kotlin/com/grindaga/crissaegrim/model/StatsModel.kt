package com.grindaga.crissaegrim.model

import javafx.beans.property.SimpleIntegerProperty
import tornadofx.*

class Stats(){
    constructor(hp: Int): this() {
        this.hp = hp
        this.hpMax = hpMax
    }

    val hpProperty = SimpleIntegerProperty()
    var hp by hpProperty

    val hpMaxProperty = SimpleIntegerProperty()
    var hpMax by hpMaxProperty
}

class StatsModel(stats: Stats? = null) : ItemViewModel<Stats>(stats) {
    val hp = bind(Stats::hpProperty)
    val hpMax = bind(Stats::hpMaxProperty)
}

class StatsScope : Scope() {
    val stats = StatsModel()
}
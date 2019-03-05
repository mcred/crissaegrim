package com.grindaga.crissaegrim.model

import javafx.beans.property.SimpleIntegerProperty
import tornadofx.*

class Stats(
    HP: Int,
    HPMax: Int,
    Hearts: Int,
    HeartsMax: Int,
    MP: Int,
    MPMax: Int,
    STR: Int,
    CON: Int,
    INT: Int,
    LCK: Int,
    ATTBonus: Int
){
    val hpProperty = SimpleIntegerProperty()
    var HP by hpProperty
    val hpMaxProperty = SimpleIntegerProperty()
    var HPMax by hpMaxProperty
    val heartsProperty = SimpleIntegerProperty()
    var Hearts by heartsProperty
    val heartsMaxProperty = SimpleIntegerProperty()
    var HeartsMax by heartsMaxProperty
    val mpProperty = SimpleIntegerProperty()
    var MP by mpProperty
    val mpMaxProperty = SimpleIntegerProperty()
    var MPMax by mpMaxProperty
    val strProperty = SimpleIntegerProperty()
    var STR by strProperty
    val conProperty = SimpleIntegerProperty()
    var CON by conProperty
    val intProperty = SimpleIntegerProperty()
    var INT by intProperty
    val lckProperty = SimpleIntegerProperty()
    var LCK by lckProperty
    val attBonusProperty = SimpleIntegerProperty()
    var ATTBonus by attBonusProperty
}

class StatsModel(stats: Stats? = null) : ItemViewModel<Stats>(stats) {
    val HP = bind(Stats::hpProperty)
    val HPMax = bind(Stats::hpMaxProperty)
    val Hearts = bind(Stats::heartsProperty)
    val HeartsMax = bind(Stats::heartsMaxProperty)
    val MP = bind(Stats::mpProperty)
    val MPMax = bind(Stats::mpMaxProperty)
    val STR = bind(Stats::strProperty)
    val CON = bind(Stats::conProperty)
    val INT = bind(Stats::intProperty)
    val LCK = bind(Stats::lckProperty)
    val ATTBonus = bind(Stats::attBonusProperty)
}

class StatsScope : Scope() {
    val stats = StatsModel()
}
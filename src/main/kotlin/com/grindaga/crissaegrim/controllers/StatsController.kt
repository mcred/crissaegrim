package com.grindaga.crissaegrim.controllers

import com.grindaga.crissaegrim.model.StatsScope
import tornadofx.*

class StatsController: Controller() {
    val statsScope = StatsScope()
    val stats = statsScope.stats

    init {
        stats.hp.setValue(0)
        stats.hpMax.setValue(0)
    }
}
package com.grindaga.crissaegrim.objects

import tornadofx.*

data class Stats (
    val HP: Int,
    val HPMax: Int,
    val Hearts: Int,
    val HeartsMax: Int,
    val MP: Int,
    val MPMax: Int,
    val STR: Int,
    val CON: Int,
    val INT: Int,
    val LCK: Int,
    val ATTBonus: Int
): ViewModel()
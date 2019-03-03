package com.grindaga.crissaegrim.maps

import com.grindaga.crissaegrim.objects.Location

data class StatsMap (
    val HP: Location = Location(0x474, 1, true),
    val HPMax: Location = Location(0x478, 1, true),
    val Hearts: Location = Location(0x47C, 1, true),
    val HeartsMax: Location = Location(0x480, 1, true),
    val MP: Location = Location(0x484, 1, true),
    val MPMax: Location = Location(0x488, 1, true),
    val STR: Location = Location(0x48C),
    val CON: Location = Location(0x490),
    val INT: Location = Location(0x494),
    val LCK: Location = Location(0x498),
    val ATTBonus: Location = Location(0x49)
)
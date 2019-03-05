package com.grindaga.crissaegrim.model

import javafx.beans.property.SimpleIntegerProperty
import tornadofx.*

class Relics (
    soulOfBat: Int,
    fireOfBat: Int,
    echoOfBat: Int,
    forceOfEcho: Int,
    soulOfWolf: Int,
    powerOfWolf: Int,
    skillOfWolf: Int,
    formOfMist: Int,
    powerOfMist: Int,
    gasCloud: Int,
    cubeOfZoe: Int,
    spiritOrb: Int,
    gravityBoots: Int,
    leapStone: Int,
    holySymbol: Int,
    faerieScroll: Int,
    jewelOfOpen: Int,
    mermanStatue: Int,
    batCard: Int,
    ghostCard: Int,
    faerieCard: Int,
    demonCard: Int,
    swordCard: Int,
    heartOfVlad: Int,
    toothOfVlad: Int,
    ribOfVlad: Int,
    ringOfVlad: Int,
    eyeOfVlad: Int
){
    val soulOfBatProperty = SimpleIntegerProperty()
    var soulOfBat by soulOfBatProperty
    val fireOfBatProperty = SimpleIntegerProperty()
    var fireOfBat by fireOfBatProperty
    val echoOfBatProperty = SimpleIntegerProperty()
    var echoOfBat by echoOfBatProperty
    val forceOfEchoProperty = SimpleIntegerProperty()
    var forceOfEcho by forceOfEchoProperty
    val soulOfWolfProperty = SimpleIntegerProperty()
    var soulOfWolf by soulOfWolfProperty
    val powerOfWolfProperty = SimpleIntegerProperty()
    var powerOfWolf by powerOfWolfProperty
    val skillOfWolfProperty = SimpleIntegerProperty()
    var skillOfWolf by skillOfWolfProperty
    val formOfMistProperty = SimpleIntegerProperty()
    var formOfMist by formOfMistProperty
    val powerOfMistProperty = SimpleIntegerProperty()
    var powerOfMist by powerOfMistProperty
    val gasCloudProperty = SimpleIntegerProperty()
    var gasCloud by gasCloudProperty
    val cubeOfZoeProperty = SimpleIntegerProperty()
    var cubeOfZoe by cubeOfZoeProperty
    val spiritOrbProperty = SimpleIntegerProperty()
    var spiritOrb by spiritOrbProperty
    val gravityBootsProperty = SimpleIntegerProperty()
    var gravityBoots by gravityBootsProperty
    val leapStoneProperty = SimpleIntegerProperty()
    var leapStone by leapStoneProperty
    val holySymbolProperty = SimpleIntegerProperty()
    var holySymbol by holySymbolProperty
    val faerieScrollProperty = SimpleIntegerProperty()
    var faerieScroll by faerieScrollProperty
    val jewelOfOpenProperty = SimpleIntegerProperty()
    var jewelOfOpen by jewelOfOpenProperty
    val mermanStatueProperty = SimpleIntegerProperty()
    var mermanStatue by mermanStatueProperty
    val batCardProperty = SimpleIntegerProperty()
    var batCard by batCardProperty
    val ghostCardProperty = SimpleIntegerProperty()
    var ghostCard by ghostCardProperty
    val faerieCardProperty = SimpleIntegerProperty()
    var faerieCard by faerieCardProperty
    val demonCardProperty = SimpleIntegerProperty()
    var demonCard by demonCardProperty
    val swordCardProperty = SimpleIntegerProperty()
    var swordCard by swordCardProperty
    val heartOfVladProperty = SimpleIntegerProperty()
    var heartOfVlad by heartOfVladProperty
    val toothOfVladProperty = SimpleIntegerProperty()
    var toothOfVlad by toothOfVladProperty
    val ribOfVladProperty = SimpleIntegerProperty()
    var ribOfVlad by ribOfVladProperty
    val ringOfVladProperty = SimpleIntegerProperty()
    var ringOfVlad by ringOfVladProperty
    val eyeOfVladProperty = SimpleIntegerProperty()
    var eyeOfVlad by eyeOfVladProperty

}

class RelicsModel(relics: Relics? = null) : ItemViewModel<Relics>(relics) {
    val soulOfBat = bind(Relics::soulOfBatProperty)
    val fireOfBat = bind(Relics::fireOfBatProperty)
    val echoOfBat = bind(Relics::echoOfBatProperty)
    val forceOfEcho = bind(Relics::forceOfEchoProperty)
    val soulOfWolf = bind(Relics::soulOfWolfProperty)
    val powerOfWolf = bind(Relics::powerOfWolfProperty)
    val skillOfWolf = bind(Relics::skillOfWolfProperty)
    val formOfMist = bind(Relics::formOfMistProperty)
    val powerOfMist = bind(Relics::powerOfMistProperty)
    val gasCloud = bind(Relics::gasCloudProperty)
    val cubeOfZoe = bind(Relics::cubeOfZoeProperty)
    val spiritOrb = bind(Relics::spiritOrbProperty)
    val gravityBoots = bind(Relics::gravityBootsProperty)
    val leapStone = bind(Relics::leapStoneProperty)
    val holySymbol = bind(Relics::holySymbolProperty)
    val faerieScroll = bind(Relics::faerieScrollProperty)
    val jewelOfOpen = bind(Relics::jewelOfOpenProperty)
    val mermanStatue = bind(Relics::mermanStatueProperty)
    val batCard = bind(Relics::batCardProperty)
    val ghostCard = bind(Relics::ghostCardProperty)
    val faerieCard = bind(Relics::faerieCardProperty)
    val demonCard = bind(Relics::demonCardProperty)
    val swordCard = bind(Relics::swordCardProperty)
    val heartOfVlad = bind(Relics::heartOfVladProperty)
    val toothOfVlad = bind(Relics::toothOfVladProperty)
    val ribOfVlad = bind(Relics::ribOfVladProperty)
    val ringOfVlad = bind(Relics::ringOfVladProperty)
    val eyeOfVlad = bind(Relics::eyeOfVladProperty)
}

class RelicsScope : Scope() {
    val relics = RelicsModel()
}
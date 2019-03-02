package com.grindaga.crissaegrim.views

import tornadofx.*

class MainView : View("Crissaegrim") {
    override val root = borderpane {
        top(MenuBarView::class)
        center(CharacterView::class)
        //bottom(FooterView::class)
    }
}

package com.grindaga.crissaegrim.views

import tornadofx.*

class MainView : View("Crissaegrim") {
    override val root = borderpane {
        top(MenuBarView::class)
        center(StatsView::class)
        //bottom(FooterView::class)
    }
}

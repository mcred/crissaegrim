package com.grindaga.crissaegrim.views

import com.grindaga.crissaegrim.controllers.StatsController
import com.grindaga.crissaegrim.service.FileService
import javafx.application.Platform
import tornadofx.*
import javafx.scene.input.KeyCombination

class MenuBarView : View("My View") {
    override val root = menubar{
        useMaxWidth = true
        paddingVertical = 4
        paddingHorizontal = 5

        menu("File") {
            item("Open", KeyCombination.valueOf("Shortcut+O")) {
                setOnAction {
                    FileService.openFile()
                }
            }
            item("Save", KeyCombination.valueOf("Shortcut+S")) {
            }
            item("Save as new file", KeyCombination.valueOf("Shortcut+W")) {
            }
            item("Quit", KeyCombination.valueOf("Shortcut+Q")) {
                setOnAction {
                    Platform.exit()
                }
            }
        }

        menu("Help") {
            item("About Crissaegrim", KeyCombination.valueOf("Shortcut+Z")) {
            }
        }
    }

}

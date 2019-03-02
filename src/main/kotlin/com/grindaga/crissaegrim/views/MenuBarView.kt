package com.grindaga.crissaegrim.views

import javafx.application.Platform
import tornadofx.*
import javafx.scene.input.KeyCombination
import javafx.stage.FileChooser
import java.io.File
import com.grindaga.crissaegrim.objects.*
import com.grindaga.crissaegrim.utils.*
import com.grindaga.crissaegrim.utils.Loader

class MenuBarView : View("My View") {
    override val root = menubar{
        useMaxWidth = true
        paddingVertical = 4
        paddingHorizontal = 5

        menu("File") {
            item("Open", KeyCombination.valueOf("Shortcut+O")) {
                setOnAction {
                    val filters = arrayOf(FileChooser.ExtensionFilter("Memory Card Files", "*.mcr"))
                    val files: List<File> = chooseFile("Select PS1 Memory Card", filters, FileChooserMode.Single)
                    val loader = Loader()
                    val card = loader.loadCard(files[0].toString())
                    println(card.slots[1])
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

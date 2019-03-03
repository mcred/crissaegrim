package com.grindaga.crissaegrim.service

import com.grindaga.crissaegrim.controllers.StatsController
import com.grindaga.crissaegrim.objects.Card
import javafx.stage.FileChooser
import tornadofx.*
import java.io.File

/**
FileService to Open and Save Memory Card Files

Thanks to @nekonenene for reference:
https://github.com/nekonenene/TornadoMemo
 */
object FileService: Component() {
    private val mcrFilter = FileChooser.ExtensionFilter("mednafen files (*.mcr)", "*.mcr")
    private val allFilter = FileChooser.ExtensionFilter("all files (*.*)", "*.*")

    private val statsCtrl: StatsController by inject()
    private val stats = statsCtrl.stats

    fun openFile(targetFile: File? = null) {
        val file: File = when (targetFile) {
            null -> getFile() ?: return
            else -> targetFile
        }

        try {
            val saveFile = File(file.toString()).inputStream()
            val card = Card.load(file.toString(), saveFile)
            println(card.slots[1])

            stats.hp.setValue(12)

        } catch (e: Exception) {
            println(e)
        }
    }

    private fun getFile(): File? {
        val fileList = chooseFile("Select PS1 Memory Card", arrayOf(mcrFilter, allFilter), FileChooserMode.Single)
        return when (fileList.isEmpty()) {
            true -> null
            else -> fileList.first()
        }
    }
}
package com.grindaga.crissaegrim.service

import com.grindaga.crissaegrim.controllers.MessageController
import com.grindaga.crissaegrim.controllers.StatsController
import com.grindaga.crissaegrim.objects.Card
import javafx.stage.FileChooser
import tornadofx.*
import java.io.File
import java.io.FileOutputStream

/**
FileService to Open and Save Memory Card Files

Thanks to @nekonenene for reference:
https://github.com/nekonenene/TornadoMemo
 */
object FileService: Component() {
    private val mcrFilter = FileChooser.ExtensionFilter("mednafen files (*.mcr)", "*.mcr")
    private val allFilter = FileChooser.ExtensionFilter("all files (*.*)", "*.*")

    private val statsCtrl: StatsController by inject()
    private val messageCtrl: MessageController by inject()
    private var fileLocation: String = ""

    fun openFile(targetFile: File? = null) {
        val file: File = when (targetFile) {
            null -> getFile(FileChooserMode.Single) ?: return
            else -> targetFile
        }

        try {
            fileLocation = file.toString()
            val card = Card.load(fileLocation)
            val slot = card.slots[1]

            statsCtrl.loadFromSlot(slot)

        } catch (e: Exception) {
            println(e)
        }
    }

    fun saveFile(targetFile: File? = null) {

        //TODO persist card and slot by models
        val card = Card.load(fileLocation)
        val slot = card.slots[1]

        statsCtrl.writeToSlot(slot)

        /*
        val file: File = when (targetFile) {
            null -> getFile(FileChooserMode.Save) ?: return
            else -> targetFile
        }
        */

        try {
            val fileWriter = FileOutputStream(File(fileLocation))
            fileWriter.write(card.toRaw())
            fileWriter.close()
            messageCtrl.fire("File saved.")
        } catch (e: Exception) {
            println(e)
        }
    }

    private fun getFile(mode: FileChooserMode): File? {
        val fileList = chooseFile("Select PS1 Memory Card", arrayOf(mcrFilter, allFilter), mode)
        return when (fileList.isEmpty()) {
            true -> null
            else -> fileList.first()
        }
    }
}
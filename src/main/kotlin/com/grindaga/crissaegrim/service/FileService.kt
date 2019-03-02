package com.grindaga.crissaegrim.service

import com.grindaga.crissaegrim.objects.Card
import javafx.stage.FileChooser
import tornadofx.*
import java.io.File

object FileService {
    private val mcrFilter = FileChooser.ExtensionFilter("mednafen files (*.mcr)", "*.mcr")
    private val allFilter = FileChooser.ExtensionFilter("all files (*.*)", "*.*")

    fun openFile(targetFile: File? = null) {
        val file: File

        if (targetFile == null) {
            // If the user didn't select, then finish this method.
            file = getFile() ?: return
        } else {
            file = targetFile
        }

        try {
            val saveFile = File(file.toString()).inputStream()
            val card = Card.load(file.toString(), saveFile)
            println(card.slots[1])
            //ModelManager.textModel.textProperty.set(text)
            //ModelManager.fileModel.fileProperty.set(file)
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
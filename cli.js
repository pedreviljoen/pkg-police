#!/usr/bin/env node
const recommended = require("./config/recommended")
const { missingFields } = require("./src/reader")
const { promptQuestion, addFieldQuestionBuilder } = require('./src/consolePrompter')
const { writeToPackage } = require('./src/writer')
const question = require("./config/question")
const chalk = require("chalk")
const figlet = require("figlet")
const colors = require("colors")

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("Package Police", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  )
}

const run = async () => {
  init()
  const answer = await promptQuestion(question)
  const { CHECKER } = answer

  if (CHECKER.toLowerCase() == "y") {
    const missing = await missingFields(recommended)

    if (missing.length > 0) {
      const fieldQuestions = addFieldQuestionBuilder(missing)
      console.log(colors.red.bold("Some fields missing, please provide details for & we'll add them: "))
      const optionsToAdd = await promptQuestion(fieldQuestions)
      await writeToPackage(optionsToAdd)
    } else {
      console.log(colors.green("Great! Seems like you are up to scratch."))
    }
  }
}

run()

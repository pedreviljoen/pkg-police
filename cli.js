#!/usr/bin/env node
const recommended = require("./config/recommended")
const { missingFields } = require("./reader")
const question = require("./config/question")
const chalk = require("chalk")
const figlet = require("figlet")
const inquirer = require("inquirer")
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

const askChecker = () => {
  return inquirer.prompt(question)
}

const run = async () => {
  init()
  const answer = await askChecker()
  const { CHECKER } = answer

  if (CHECKER.toLowerCase() == "y") {
    const missing = await missingFields(recommended)

    if (missing.length > 0) {
      console.log("We recommend you add the following fields: ")
      missing.forEach(item => console.log(colors.red.bold(item)))
    } else {
      console.log(colors.green("Great! Seems like you are up to scratch."))
    }
  }
}

run()

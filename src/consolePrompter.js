const inquirer = require("inquirer")

// prompt
const promptQuestion = question => {
  return inquirer.prompt(question)
}

// prompt to add fields
const addFieldQuestionBuilder = (fields = []) => {
  const blueprint = {
    type: "input",
    validate: function(value) {
      if (value.length) {
        return true
      } else {
        return "Please provide a valid field name."
      }
    }
  }

  return fields.map(field => {
    return {
      ...blueprint,
      name: field.toLowerCase(),
      message: `${field}:`
    }
  })
}

//
module.exports = {
  promptQuestion,
  addFieldQuestionBuilder
}

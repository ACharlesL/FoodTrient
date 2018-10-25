'use strict'

const showIngredientsTemplate = require('../templates/ingredient-listing.handlebars')

// const ingredientCreateSuccess = (data) => {
//   console.log(data)
//   const showBooksHtml = showBooksTemplate({ books: data.books })
//   $('.content').html(showBooksHtml)
// }
const ingredientCreateSuccess = function (response) {
  $('#display-message').html('content created')
  $('#display-message').css('color', 'green')
}
const getIngredientsSuccess = (data) => {
//  console.log(data)
  const showIngredientsHtml = showIngredientsTemplate({ ingredients: data.ingredients })
  $('.content').html(showIngredientsHtml)
}

const deleteIngredientSuccess = function (response) {
  $('#display-message').html('ingredient deleted')
  $('#display-message').css('color', 'green')
}

const updateIngredientsSuccess = function (response) {
  $('#display-message').html('content updated')
  $('#display-message').css('color', 'green')
}
// const clearBooks = () => {
//   $('.content').empty()
// }

const failure = (error) => {
  console.error(error)
}

module.exports = {
  ingredientCreateSuccess,
  getIngredientsSuccess,
  failure,
  updateIngredientsSuccess,
  deleteIngredientSuccess
}

'use strict'

const showFridgesTemplate = require('../templates/fridge-listing.handlebars')
const store = require('../store.js')

// const ingredientCreateSuccess = (data) => {
//   console.log(data)
//   const showBooksHtml = showBooksTemplate({ books: data.books })
//   $('.content').html(showBooksHtml)
// }
const ingredientCreateSuccess = function (response) {
  $('#display-message').html('content created')
  $('#display-message').css('color', 'green')
}
const getFridgesSuccess = (data) => {
//  console.log('in ui before handlebars')
//  console.log(data.fridges[0])
//  console.log(data)
//  console.log(store.user.id)
  const showFridgesHtml = showFridgesTemplate({ fridges: data.fridges })
  $('.content').html(showFridgesHtml)
  // const showFridgesHtml = showFridgesTemplate({ fridges: data.fridges })
  // $('.content').html(showFridgesHtml)
}
const fridgeDeleteSuccess = function (response) {
  $('#display-message').html('content deleted')
  $('#display-message').css('color', 'red')
}

const updateFridgeSuccess = function (response) {
  $('#display-message').html('content updated')
  $('#display-message').css('color', 'green')
}
// const clearBooks = () => {
//   $('.content').empty()
// }

const failure = (error) => {
//  console.error(error)
}

module.exports = {
  ingredientCreateSuccess,
  getFridgesSuccess,
  failure,
  updateIngredientsSuccess,
  fridgeDeleteSuccess
}

'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onCreateIngredient = (event) => {
  event.preventDefault()
  api.createIngredient()
    .then(ui.ingredientCreateSuccess)
    .catch(ui.failure)
}

const onClearBooks = (event) => {
  event.preventDefault()
  ui.clearBooks()
}
// const onDeleteBook = (event) => {
//   event.preventDefault()
//   const bookId = $(event.target).closest('section').date('id')
//   if (confirm('Are you sure')) {
//     api.deleteBook(bookId)
//       .then(() => onGetBooks(event))
//       .catch(ui.failure)
//   }
// }
const addHandlers = () => {
  $('#create-ingredient').on('submit', onCreateIngredient)
  $('#clearBooksButton').on('click', onClearBooks)
//  $('.content').on('click', 'button', onDeleteBook)
}

module.exports = {
  addHandlers
}

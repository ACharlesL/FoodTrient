'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreateIngredient = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
//  console.log(data)
  const currentIngredient = {
    'ingredient': {
      'name': data.name,
      'unit': data.unit
    }
  }
//  console.log(currentIngredient)
  api.createIngredient(currentIngredient)
    .then(ui.ingredientCreateSuccess)
    .catch(ui.failure)
}

const onUpdateIngredient = (event) => {
//  console.log('in update')
  event.preventDefault()
  const data = getFormFields(event.target)
//  console.log(data)
  store.updateid = data.id
  const updatedIngredient = {
    'ingredient': {
      'name': data.name,
      'unit': data.unit
    }
  }
  api.updateIngredient(updatedIngredient)
    .then(ui.updateIngredientsSuccess)
    .catch(ui.failure)
}

const onGetIngredients = (event) => {
  event.preventDefault()
  api.getIngredients()
    .then(ui.getIngredientsSuccess)
    .catch(ui.failure)
}

const onDeleteIngredient = (event) => {
  event.preventDefault()
  // console.log('in delete ingrid')
  const IngredientId = $(event.target).closest('section').data('id')
  api.deleteIngredient(IngredientId)
    .then(() => onGetIngredients(event))
    .catch(ui.failure)
}
// const onDeleteIngredient = (event) => {
//   event.preventDefault()
//   const bookId = $(event.target).closest('section').date('id')
//   if (confirm('Are you sure')) {
//     api.deleteBook(bookId)
//       .then(() => onGetBooks(event))
//       .catch(ui.failure)
//   }
// }
// const onClearBooks = (event) => {
//   event.preventDefault()
//   ui.clearBooks()
// }
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
  $('#create-ingredient-form').on('submit', onCreateIngredient)
  $('#getIngredientsButton').on('click', onGetIngredients)
  $('.content').on('click', 'button', onDeleteIngredient)
  $('#update-ingredient-form').on('submit', onUpdateIngredient)
  //  $('.content').on('click', 'button', onDeleteBook)
}

module.exports = {
  addHandlers
}

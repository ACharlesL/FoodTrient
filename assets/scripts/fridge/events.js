'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreateFridge = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  //  console.log('in event')
  //  console.log(data)
  const currentFridge = {
    'fridge': {
      'ingredient_id': data.ingredient
    }
  }
  //  console.log('current Fridge')
  //  console.log(currentFridge)
  api.createFridge(currentFridge)
    .then(ui.fridgeCreateSuccess)
    .catch(ui.failure)
}

const onUpdateFridge = (event) => {
//  console.log('in update')
  event.preventDefault()
  const data = getFormFields(event.target)
  //  console.log(data)
  store.updateid = data.id
  const updatedFridge = {
    'fridge': {
      'name': data.name,
      'unit': data.unit
    }
  }
  api.updateFridge(updatedFridge)
    .then(ui.updateFridgeSuccess)
    .catch(ui.failure)
}

const onGetFridges = (event) => {
  event.preventDefault()
  api.getFridges()
    .then(ui.getFridgesSuccess)
    .catch(ui.failure)
}

// const onDeleteFridge = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data.fridge)
//   const fridgeId = data.fridge
//   api.deleteFridge(fridgeId)
//     .then(ui.fridgeDeleteSuccess)
//     .catch(ui.failure)
// }

const onDeleteFridge = (event) => {
  event.preventDefault()
  // console.log('in delete ingrid')
  const FridgeId = $(event.target).closest('section').data('id')
  api.deleteFridge(FridgeId)
    .then(() => onGetFridges(event))
    .catch(ui.failure)
}
// }
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
  $('#create-fridgeItem-form').on('submit', onCreateFridge)
  $('#getFridgesButton').on('click', onGetFridges)
  $('content').on('click', 'button', onDeleteFridge)
  // $('.content').on('click', '.delete', onDeleteFridge)
  $('#update-ingredient-form').on('submit', onUpdateFridge)

  //  $('.content').on('click', 'button', onDeleteBook)
}

module.exports = {
  addHandlers
}

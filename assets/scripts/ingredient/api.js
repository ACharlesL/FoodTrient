'use strict'

const config = require('../config')
const store = require('../store.js')

const createIngredient = function (currentData) {
//  console.log('in api')
  return $.ajax({
    url: config.apiUrl + '/ingredients',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: currentData
  })
}

const getIngredients = function () {
  return $.ajax({
    url: config.apiUrl + '/ingredients',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const deleteIngredient = (ingredientId) => {
  return $.ajax({
    url: config.apiUrl + '/ingredients/' + ingredientId,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

const updateIngredient = (updatedIngredient) => {
  const updateId = store.updateid
  return $.ajax({
    url: config.apiUrl + '/ingredients/' + updateId,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: updatedIngredient
  })
}

// const deleteBook = (bookId) => {
//   return $.ajax({
//     url: config.apiUrl + '/books/' + bookId,
//     method: 'DELETE'
//   })
// }

module.exports = {
  createIngredient,
  getIngredients,
  deleteIngredient,
  updateIngredient
}

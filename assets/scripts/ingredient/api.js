'use strict'

const config = require('../config')

const createIngredient = function (currentData) {
  console.log('in api')
  return $.ajax({
    url: config.apiUrl + '/ingredients',
    method: 'POST',
    data: currentData
  })
}

const getIngredients = function () {
  return $.ajax({
    url: config.apiUrl + '/ingredients',
    method: 'GET'
  })
}

const deleteIngredient = (ingredientId) => {
  return $.ajax({
    url: config.apiUrl + '/ingredients/' + ingredientId,
    method: 'DELETE'
  })
}

const updateIngredient = (ingredientId) => {
  return $.ajax({
    url: config.apiUrl + '/ingredients/' + ingredientId,
    method: 'PATCH',
    data: currentData

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

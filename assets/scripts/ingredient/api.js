'use strict'

const config = require('../config')

const createIngredient = function () {
  return $.ajax({
    url: config.apiUrl + '/ingredients'
  })
}

const deleteBook = (bookId) => {
  return $.ajax({
    url: config.apiUrl + '/books/' + bookId,
    method: 'DELETE'
  })
}

module.exports = {
  createIngredient,
  deleteBook
}

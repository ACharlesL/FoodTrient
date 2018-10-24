'use strict'

const config = require('../config')
const store = require('../store.js')

const createFridge = function (currentData) {
//  console.log('in api')
  return $.ajax({
    url: config.apiUrl + '/fridges',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: currentData
  })
}

const getFridges = function () {
  return $.ajax({
    url: config.apiUrl + '/fridges',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const deleteFridge = (fridgeId) => {
  return $.ajax({
    url: config.apiUrl + '/fridges/' + fridgeId,
    method: 'DELETE'
  })
}

const updateFridge = (updatedFridge) => {
  const updateId = store.updateid
  return $.ajax({
    url: config.apiUrl + '/fridges/' + updateId,
    method: 'PATCH',
    data: updatedFridge
  })
}

// const deleteBook = (bookId) => {
//   return $.ajax({
//     url: config.apiUrl + '/books/' + bookId,
//     method: 'DELETE'
//   })
// }

module.exports = {
  createFridge,
  getFridges,
  updateFridge,
  deleteFridge
}

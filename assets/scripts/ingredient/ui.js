'use strict'

// const showBooksTemplate = require('../templates/book-listing.handlebars')

// const ingredientCreateSuccess = (data) => {
//   console.log(data)
//   const showBooksHtml = showBooksTemplate({ books: data.books })
//   $('.content').html(showBooksHtml)
// }
const ingredientCreateSuccess = (data) => {
  $('.display-message').html('content created')
}

const clearBooks = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  ingredientCreateSuccess,
  clearBooks,
  failure
}

'use strict'



let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate

console.log('Log message: Here\'s a hidden message')
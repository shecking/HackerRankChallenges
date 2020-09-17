/*
Given a two letter unique country code, the task is to use the API to get the name of the country with the given code.

The given API uses pagination to return the data divided into pages. Fetching the whole data avilable on the API requires multiple requests.

To get a single page of countries data, perform HTTP GET request to https://jsonmock.hackerrank.com/api/countries?page=<pageNumber>, where pageNumber is an integer denoting the page number of the results we are requesting.

For example, a GET request to https://jsonmock.hackerrank.com/api/countries?page=2 will return the second page of the collection of countries. Pages are numbered from 1, so in order to access the first page you need to ask for page number 1.

The response is a JSON with the following 5 fields:
  page: the current page of the results
  per_page: the max number of countries returned per page
  total: the total number of countries on all pages of the results
  total_pages: the total number of pages with results
  data: an array of objects containing country information on the requested page.

Each country has several fields but in this task only name and alpha2Code are relevant.

Complete the function getCountryName. It has the following parameter:
  string code: a two letter string denoting the given country code
It returns:
  string: the name of the country with the given country code
*/

function getNumberOfPages(callback) {
  const https = require('https')

  var options = {
    hostname: 'jsonmock.hackerrank.com',
    path: '/api/countries?page=1',
    method: 'GET'
  }

  https.get(options, function(response) {
    var buffer = ''
    response.on('data', function(d) {
      buffer += d
    }).on('end', function() {
      var body
      try {
        body = JSON.parse(buffer)
        totalPages = body.total_pages
        console.log(totalPages)
        return totalPages
      } catch (err) {
        callback(err)
      }
      callback(null, body)
    })
  })
}

getNumberOfPages() // this returns the number of pages
// BUT HOW TO USE THIS FOR FUNCTION









// FIRST PART to get total pages
// async function getPages() {
//   const https = require('https')
//
//   var options = {
//     hostname: 'jsonmock.hackerrank.com',
//     path: '/api/countries?page=1',
//     method: 'GET'
//   }
//
//   const callback = function(res) {
//     var data = ''
//     res.on('data', (chunk) => {
//       data += chunk
//     })
//     res.on('end', function () {
//       const pageData = JSON.parse(data)
//       const numberOfPages = pageData.total_pages
//       console.log(numberOfPages)
//     })
//   }
//   var req = https.request(options, callback).end()
// }
//

// SECOND PART to get country name
// async function getCountryName(code) {
//   console.log('calling')
//   const pages = await getPages()
//   for (let pageNumber = 1; pageNumber <= pages; pageNumber ++) {
//     https.get(`https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`, (resp) => {
//       let data = ''
//
//       resp.on('data', (chunk) => {
//         data += chunk
//       })
//
//       resp.on('end', () => {
//         const pageData = JSON.parse(data)
//         for (let j = 0; j < pageData.data.length; j ++) {
//           if (pageData.data[j].alpha2Code == code) {
//             console.log(pageData.data[j].name)
//           }
//         }
//       })
//     }).on('error', (err) => {
//       console.log('Error: ', err.message)
//     })
//   }
// }
//
// getCountryName('AF')


var tbody = d3.select("tbody");

// from data.js
var tableData = data;
// console.log(tableData)

// loop over the data to append to the website
data.forEach(tableData => {
    //creates a mew rpw for each object
    var row = tbody.append('tr');
    //loop inside of dataset loop that appends each value item to its column
    Object.values(tableData).forEach(([key, value]) => {
        row.append('td').text(value);
        console.log(key, value);
    }







// YOUR CODE HERE!


// console.log(data)
// // to add a new row the to the table
// var newRow = [];
// // not sure if I need this empty list or not... 

// // select the table from index.html
// var table = d3.select("ufo-table");

// // use d3 to select the table body only
// var tbody = d3.select('tbody');

// // append one table row `tr` to the table body 
// var row = tbody.append('tr');

// // append one cell for the new... 
// row.append('td').text(newRow[0]);

// // append one cell for the new...
// row.append('td').text(rewRow[1]);







// // from JavaScript III -- table data

// // Get a reference to the table body
// var tbody = d3.select("tbody");

// // Console.log the weather data from data.js
// console.log(data);


// // Step 1: Loop Through `data` and log each weather report object
// data.forEach(weather => {
//     console.log(weather);

//     // Step 2:  Use d3 to append one table row `tr` for each weather report object
//     var row = tbody.append("tr");

//     // Step 3:  Use `Object.entries` to log each weather report value
//     Object.entries(weather).forEach(([key, value]) => {
//         console.log(key, value);

//         // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
//         var cell = row.append("td");

//         // Step 5: Use d3 to update each cell's text with
//         // weather report values (weekday, date, high, low)
//         cell.text(value);
//     });
// });

// from data.js
var tbody = d3.select('tbody');

var ufoSightings = data;
// console.log(tableData)

// Select the 'filter table' button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on('click', function () {

    // Select the date element
    var selectElement = d3.select('#datetime');

    // Get the value property of the select element
    var selectValue = selectElement.property('value');

    // The form will use a date entry 
    // need to figure out how to make this a an error if not correct date 
    var filtered = ufoSightings.filter(item => item.datetime === selectValue);

    // Reset table data for everytime a new date is entered
    var tbody = d3.select("tbody").text(" ")

    // loop over the data to append to the website
    filtered.forEach(ufoSightings => {
        //creates a mew rpw for each object
        var row = tbody.append('tr');
        //loop inside of dataset loop that appends each value item to its column
        Object.values(ufoSightings).forEach(value => {
            row.append('td').text(value);
            // console.log(key, value);
        });
    });
});

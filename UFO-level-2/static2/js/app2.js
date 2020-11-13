// from data.js
var tbody = d3.select('tbody');

var ufoSightings = data;
// console.log(tableData)

// Select the 'filter table' button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on('click', function () {

    d3.event.preventDefault();

    // Select the date element
    var selectElement = d3.select('#datetime');

    // Get the value property of the select element
    var selectValue = selectElement.property('value')

    // The form will use a date entry 
    // need to figure out how to make this a an error if not correct date 
    var filtered = ufoSightings.filter(item => item.datetime === selectValue);
    // I want to do a console.alert('Date not in data') ... here, or where pertinent.

    // Reset table data for every time a new date is entered
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


// when reset button is Selected
var resetButton = d3.select("#reset-btn");

// copied from above 
resetButton.on('click', function () {

    d3.event.preventDefault();

    // I think this just blanks the table data
    var tbody = d3.select('tbody').text(' ');

});

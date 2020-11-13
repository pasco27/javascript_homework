// from data.js
var tbody = d3.select('tbody');

var ufoSightings = data;
// console.log(tableData)


// - So in this one, what I think I want to do on the filter button click is:
// Date OR City OR State OR Country OR Shape


// Here I will want to create a function that picks up which cell contains data
// from below....

// loop over the data to append to the website
filtered.forEach(ufoSightings => {
    var row = tbody.append('tr');
    Object.values(ufoSightings).forEach(value => {
        row.append('td').text(value);
    })
});


// Creating an empty object for the table data to reside.  Will later append it to the page.
multiTable = {};

// Create a function that will check for an item in each filter button
// Which form has a value?

function checkFilter() {
    // check each form, but I have each form class as 'form-control', 
    // so do they each need an individual class so I can tell them apart? 

    // if
    // d3.select('each-form...').property('value');
    //
    // else
    // moe on to next form area to check..



}







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

// from data.js
var tableData = data;

// reference tbody element in html with d3
var tbody = d3.select('tbody') 

// create a function loop through object, creating a row element and cell and populating it with data.
function createTable(ufoData){
  ufoData.forEach((ufoRecord) => {
    var row = tbody.append('tr');
    
    Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
        })
    })
}

createTable(tableData)

// reference button in variable
var button = d3.select('#filter-btn');

//create event listener to execute function on button click
button.on('click', function() {
    //clear data from table
    tbody.html(" ");

    //reference form input value
    var dateElement = d3.select('#datetime');
    var dateInput  = dateElement.property('value');
    
    console.log(dateInput)//check date input capture

    //create filter to return ojbects with 'datetime' key value that matches user input
    var filteredData = tableData.filter(ufoRecord => ufoRecord.datetime === dateInput);
    
    console.log(filteredData)//check filtered data object

    //check that date is entered in valid format and if so populate table with filtered data
    if (moment(dateInput, 'M/D/YYYY', true).isValid()){
        createTable(filteredData);
    }
    else {
        alert("Please enter a date in January 2010 as M/D/YYYY format");
    }
})
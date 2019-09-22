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
    var cityElement = d3.select('#city');
    var cityInput = cityElement.property('value');
    var stateElement = d3.select('#state');
    var stateInput = stateElement.property('value');
    var countryElement = d3.select('#country');
    var countryInput = countryElement.property('value');
    var shapeElement = d3.select('#shape');
    var shapeInput = shapeElement.property('value');
    var durationElement = d3.select('#durationMinutes');
    var durationInput = durationElement.property('value');
    
    console.log(dateInput)//check date input capture

    //create filter to return ojbects with 'datetime' key value that matches user input
    var dateFilter = tableData.filter(ufoRecord => ufoRecord.datetime === dateInput);
    var cityFilter = tableData.filter(ufoRecord => ufoRecord.city === cityInput);
    var stateFilter = tableData.filter(ufoRecord => ufoRecord.state === stateInput);
    var countryFilter = tableData.filter(ufoRecord => ufoRecord.country === countryInput);
    var shapeFilter = tableData.filter(ufoRecord => ufoRecord.shape === shapeInput);
    var durationFilter = tableData.filter(ufoRecord => ufoRecord.durationMinutes == durationInput);
    // console.log(filteredData)//check filtered data object





    //check that date is entered in valid format and if so populate table with filtered data
    if (moment(dateInput, 'M/D/YYYY', true).isValid() || dateInput.length==0){
        createTable(dateFilter)
        createTable(cityFilter)
        createTable(stateFilter)
        createTable(countryFilter)
        createTable(shapeFilter)
        createTable(durationFilter)
    }
    else {
        alert("Please enter a date in January 2010 as M/D/YYYY format");
    }
})
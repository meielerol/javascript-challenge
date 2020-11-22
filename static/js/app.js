// from data.js
// data: datetime, city, state, country, shape, durationMinutes, comments
// table: Date, City, State, Country, Shape, Duration, Comments
let tableData = data;

// from index.html
// define the table body
let tbody = d3.select("tbody");

// get each array item (dictionary set)
tableData.forEach((siting) => {
    // grab the row of the table body
    let row = tbody.append("tr");
    // grab the tableData dictionary entry
    Object.entries(siting).forEach(([key,value]) => {
        // append a new table item
        let cell = row.append("td");
        cell.text(value);
    });
});

// search on filtered date:

// get button reference
let buttonFilter = d3.select("#filter-btn");
// get input reference
let form = d3.select("form");

// function to handle button being clicked
function searchDate(){
    // prevent page from refresh
    d3.event.preventDefault();

    console.log("the button was clicked or the filter was entered")
    // select input element
    let inputElement = d3.select("#datetime");
    // get value of input
    let inputValue = inputElement.property("value");

    // filter the tableData by the inputValue
    let filterData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filterData);

    // remove exisiting data from the table
    tbody.html("");
    // recreate with new filtered items
    filterData.forEach((siting) => {
        // grab the row of the table body
        let row = tbody.append("tr");
        // grab the tableData dictionary entry
        Object.entries(siting).forEach(([key,value]) => {
            // append a new table item
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

// call the function when button clicked
buttonFilter.on("click",searchDate);
form.on("submit",searchDate);
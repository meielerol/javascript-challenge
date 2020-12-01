// --------------------------SET UP THE MAIN LANDING PAGE--------------------------
// from data.js
// data: datetime, city, state, country, shape, durationMinutes, comments
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

// --------------------------SELECT ON FILTERED ITEMS--------------------------
// get button reference
let buttonFilter = d3.select("#filter-btn");
// get input reference
let form = d3.select("form");

// set the inputFilters equivalent to the data
let inputFilters = data;

// function to handle filter button being clicked
function searchFilters(){
    // prevent page from refresh
    d3.event.preventDefault();

    console.log("the button was clicked or the filter was entered")

    // select input element
    let elementDate = d3.select("#datetime");
    let elementCity = d3.select("#city");
    let elementState = d3.select("#state");
    let elementCountry = d3.select("#country");
    let elementShape = d3.select("#shape");
    // get value of input & lowercase them
    let inputDate = elementDate.property("value");
    let inputCity = elementCity.property("value").toLowerCase();
    let inputState = elementState.property("value").toLowerCase();
    let inputCountry = elementCountry.property("value").toLowerCase();
    let inputShape = elementShape.property("value").toLowerCase();

    // handle multiple filters by filtering entries through matching sets in the data
    if (inputDate != ""){
        inputFilters = inputFilters.filter(entry.datetime === inputDate);
    }
    if (inputCity != "") {
        inputFilters = inputFilters.filter(entry => entry.city === inputCity);     
    }
    if (inputState != "") {
        inputFilters = inputFilters.filter(entry => entry.state === inputState);     
    }
    if (inputCountry != "") {
        inputFilters = inputFilters.filter(entry => entry.country === inputCountry);     
    }
    if (inputShape != "") {
        inputFilters = inputFilters.filter(entry => entry.shape === inputShape);     
    }
    console.log(inputFilters);

    // // filter the tableData by the inputValue
    // let filterData = tableData.filter(sighting => sighting.datetime === inputValue);
    // // console.log(filterData);

    // remove exisiting data from the table
    tbody.html("");
    // recreate with new filtered items
    inputFilters.forEach((siting) => {
        // grab the row of the table body
        let row = tbody.append("tr");
        // grab the tableData dictionary entry
        Object.entries(siting).forEach(([key,value]) => {
            // append a new table item
            let cell = row.append("td");
            cell.text(value);
        });
    }); // end filterData for new date
};

// call the function when button clicked
buttonFilter.on("click",searchFilters);
form.on("submit",searchFilters);

// --------------------------RELOAD THE TABLE AND CLEAR FILTERS--------------------------
// function to handle the reset table button being clicked
let resetTable = d3.select("#reset-btn");
resetTable.on("click", function(){
    location.reload();
});
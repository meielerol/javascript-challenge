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

// --------------------------CREATE THE MULTIPLE FILTERS/DROPDOWN ITEMS--------------------------
// gather unique array inputs
let dateUnique = [], cityUnique = [], stateUnique = [], countryUnique = [], shapeUnique = [];
// create the list of filters
for(let i=0; i<tableData.length; i++) {
    // find the dates
    if (dateUnique.includes(tableData[i].datetime) === false){
        dateUnique.push(tableData[i].datetime);
    };
    // find cities
    if (cityUnique.includes(tableData[i].city) === false){
        cityUnique.push(tableData[i].city);
    };
    // find states
    if (stateUnique.includes(tableData[i].state) === false){
        stateUnique.push(tableData[i].state);
    };
    // find countries
    if (countryUnique.includes(tableData[i].country) === false){
        countryUnique.push(tableData[i].country);
    };
    // find shapes
    if (shapeUnique.includes(tableData[i].shape) === false){
        shapeUnique.push(tableData[i].shape);
    };
};
// console.log(dateUnique);
// console.log(cityUnique);
// console.log(stateUnique);
// console.log(countryUnique);
// console.log(shapeUnique);


// inputs will need to be transformed to lower case



// --------------------------SELECT ON FILTERED ITEMS--------------------------
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
    let elementDate = d3.select("#datetime");
    let elementCity = d3.select("#city");
    let elementState = d3.select("#state");
    let elementCountry = d3.select("#country");
    let elementShape = d3.select("#shape");
    // get value of input
    let inputDate = elementDate.property("value");
    let inputCity = elementCity.property("value").toLowerCase();
    let inputState = elementState.property("value").toLowerCase();
    let inputCountry = elementCountry.property("value").toLowerCase();
    let inputShape = elementShape.property("value").toLowerCase();

    // handle multiple filters


    // filter the tableData by the inputValue
    let filterData = tableData.filter(sighting => sighting.datetime === inputValue);
    // console.log(filterData);

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
    }); // end filterData for new date
};

// call the function when button clicked
buttonFilter.on("click",searchDate);
form.on("submit",searchDate);
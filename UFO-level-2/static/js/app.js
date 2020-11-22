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

// CREATE THE DROPDOWN ITEMS
// headers for filters:
let headers = ['Date','City','State','Country','Shape'];
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
console.log(dateUnique);
console.log(cityUnique);
console.log(stateUnique);
console.log(countryUnique);
console.log(shapeUnique);


// inputs will need to be transformed to lower case


// SELECT ON FILTERED ITEMS:
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
    }); // end filterData for new date
};

// call the function when button clicked
buttonFilter.on("click",searchDate);
form.on("submit",searchDate);
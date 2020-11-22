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
"use strict"

// array containing all the coffees preloaded into the web page
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


// displays coffee on the page and provides the classes for formatting
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<p>' + '<span class="font1">' + coffee.name + '</span>' + '<span class="font2">' + " " + coffee.roast + "</span>" + "</p>";
    html += '</div>';

    return html
}


// displays coffee in ascending order
function renderCoffees(coffees) {
    var html = '';
       for (let i = 0; i < coffees.length; i++){
        html += renderCoffee(coffees[i]);
    }
    return html;
}


// allows user to search for coffee by roast type
function updateCoffees(e) {
    e.preventDefault(); // prevents the form from being submitted just updates the page
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if(selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}


// allows the user to search for coffee by name and display the output on the page
function searchCoffees(usersInput) {
    usersInput.preventDefault();
    var searchedRoast = coffeeName.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
    var coffeeName = coffee.name;
        if (coffeeName.toLowerCase().includes(searchedRoast.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}


// allows the user to add additional coffees(id, name, roast) to the program and display them on the web page
function newCoffeeInput(e){
    e.preventDefault(); // prevents the form from being submitted just updates the page

    let newCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName.value,
        roast: newRoastSelection.value
    }
    coffees.push(newCoffee);
    // re-renders the coffees displayed in the div to contain added coffees
    div.innerHTML = renderCoffees(coffees);
}


// query selector for the div containing coffee elements
var div = document.querySelector('#coffees');
// displays all the coffees within the div on the page on load
div.innerHTML = renderCoffees(coffees);

// query selectors for the first search input section and first submit button
var coffeeName = document.querySelector('#coffee-name');
var roastSelection = document.querySelector('#roast-selection');
var submitButton = document.querySelector('#submit');


// query selectors for the second input section and second submit button
var newCoffeeName = document.querySelector("#new-coffee-name");
var newRoastSelection = document.querySelector("#new-roast-selection");
var submitButton2 = document.querySelector("#submit2");


// event listeners for the submit buttons both respond to a click on the button
submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener("click", newCoffeeInput);
// event listener for the searchCoffees function responds to the release of the key and updates coffees displayed in div
coffeeName.addEventListener("keyup", searchCoffees);
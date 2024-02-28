//ASSIGNMENT SOLUTIONS FROM 31 TO 45
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//task no 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var users = ["admin", "haseeb", "ali", "fatima", "eric"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "admin") {
            console.log("hello admin, would you like to see a status report?");
        }
        else {
            console.log("hello ".concat(user, ", thank you for logging in again"));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("we need to find some new user!");
}
//task 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will
//  need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["admin", "Eric", "Ali", "Hamza", "fatima"];
var new_users = ["admin", "fatima", "Aliza", "Haseeb", "Noor"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_user = new_users_1[_a];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("sorry ".concat(new_users, ", that name is taken"));
    }
    else {
        console.log("yes ".concat(new_user, ", is still in avalible list"));
    }
}
//task 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers 
// end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should 
// read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number = numbers_1[_b];
    if (number === 1) {
        console.log("".concat(number, "st")); //1st
    }
    else if (number === 2) {
        console.log("".concat(number, "nd")); //2nd
    }
    else if (number === 3) {
        console.log("".concat(number, "rd")); //3rd
    }
    else {
        console.log("".concat(number, "th")); //4th 5th 6th 7th 8th 9th
    }
}
//task no 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
//  and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name 
// of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The 
// output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
//  such as I really love pizza!
var favorite_pizza = ["pepperoni", "chicken", "veg"];
for (var _c = 0, favorite_pizza_1 = favorite_pizza; _c < favorite_pizza_1.length; _c++) {
    var pizza = favorite_pizza_1[_c];
    console.log(pizza);
}
console.log("\n");
for (var _d = 0, favorite_pizza_2 = favorite_pizza; _d < favorite_pizza_2.length; _d++) {
    var pizza = favorite_pizza_2[_d];
    console.log("i really like ".concat(pizza, " pizza!"));
}
console.log(" \nI really love pizza!");
//task 35
// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a for loop to print out the name
//   of each animal. • Modify your program to print a statement about each animal, such as A dog
//   would make a great pet. • Add a line at the end of your program stating what these animals have in 
//   common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["cat", "lion", "dog"];
for (var _e = 0, animals_1 = animals; _e < animals_1.length; _e++) {
    var animal = animals_1[_e];
    console.log(animal);
}
console.log("\n");
for (var _f = 0, animals_2 = animals; _f < animals_2.length; _f++) {
    var animal = animals_2[_f];
    console.log("a  ".concat(animal, " has a  tail"));
}
console.log("\n all of these are great pets! but i love cats more");
//task 36
// T-Shirt: Write a function called make_shirt() that accepts a size and
//  the text of a message that should be printed on the shirt. The function
//   should print a sentence summarizing the size of the shirt and the message
//    printed on it. Call the function.
function makeShirt(size, text) {
    console.log(" you order a ".concat(size, " shirt that says ").concat(text));
}
makeShirt("large", "\"i love typescript\"");
makeShirt('medium', '"i need a big shirt"');
//task 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with
//  a message that reads I love TypeScript. Make a large shirt and a medium shirt with the 
//  default message, and a shirt of any size with a different message.
function makeShirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = ' i love typescript'; }
    console.log("you have order a ".concat(size, ", shirt that says ").concat(text));
}
makeShirt();
makeShirt('medium');
//different message
makeShirt('small', 'i need a big shirt to wear');
//task 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country.
//  The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter
//   for the country a default value. Call your function for three different cities, at least one of
//    which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('karachi'); //defult sentence
describe_city('France', 'Europe');
describe_city('Lahore', 'punjab');
//task 39
// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return "".concat(city, ",").concat(country);
}
var c1 = cityCountry('lahore', 'pakistan');
var c2 = cityCountry('tokyo', 'japan');
var c3 = cityCountry('paris', 'france');
console.log(c1);
console.log(c2);
console.log(c3);
//task 40
// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title, and it should return a Object 
//  containing these two pieces of information. Use the function to make three dictionaries representing
//   different albums. Print each return value to show that Objects are storing the album information correctly.
//    Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the
//     calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one
//      new function call that includes the number of tracks on an album.
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("ali", "light");
console.log(album);
var album = makeAlbum("bilal", "red wave");
console.log(album);
var album = makeAlbum("hamza", "seenbreez");
console.log(album);
//task 41
//  Magicians: Make a array of magician’s names. Pass the array to a function
//   called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["ali", "hamza", "bilal"];
show_magicians(magician);
//task 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function
//  called make_great() that modifies the array of magicians by adding the phrase the Great
//   to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
var magicians2 = ["ali", "hamza", "bilal"];
make_great(magicians2);
show_magicians(magicians2);
//task 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function
//  make_great() with a copy of the array of magicians’ names. Because the original
//   array will be unchanged, return the new array and store it in a separate array.
//    Call show_magicians() with each array to show that you have one array of the original
//     names and one array with the Great added to each magician’s name.
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the great');
    }
    return greatMagicians;
}
var magicians3 = [' ali', ' hamza', ' bilal'];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
//task 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered. Call the function three times,
//    using a different number of arguments each time.
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("enjoy your sandwich shamaima hassan");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createCar("toyota", "corolla", { color: 'silver', year: "2024" });
console.log(mycar);

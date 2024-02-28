//ASSIGNMENT SOLUTIONS FROM 31 TO 45

//task no 31

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let users : string [] = ["admin","haseeb","ali","fatima","eric"]

if(users.length === 0){
    console.log("We need to find some users!")
}else{
    for (let user of users){
        if (user === "admin"){
            console.log("hello admin, would you like to see a status report?")
        }else {
            console.log(`hello ${user}, thank you for logging in again`)
        }
    }
}

users = []
if (users.length === 0){
    console.log("we need to find some new user!")
}

//task 32

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will
//  need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users : string [] = ["admin","Eric","Ali","Hamza","fatima"]
let new_users : string [] = ["admin","fatima","Aliza","Haseeb","Noor"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users){
    if (current_users_lower.includes (new_user.toLowerCase())){
        console.log(`sorry ${new_users}, that name is taken`)
    }else{
        console.log(`yes ${new_user}, is still in avalible list`)
    }
}

//task 33

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers 
// end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should 
// read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers: number [] = [1,2,3,4,5,6,7,8,9]

for ( let number of numbers){

if (number === 1){
    console.log(`${number}st`)//1st
} else if(number === 2){
    console.log(`${number}nd`)//2nd

}else if(number === 3){
    console.log(`${number}rd`)//3rd
}else {
    console.log(`${number}th`)//4th 5th 6th 7th 8th 9th
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

let favorite_pizza : string [] = ["pepperoni","chicken","veg"]


for( let pizza of favorite_pizza){
    console.log(pizza)
}
console.log("\n")

for(let pizza of favorite_pizza){
    console.log(`i really like ${pizza} pizza!`)
}

console.log(" \nI really love pizza!")

//task 35
// Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a for loop to print out the name
//   of each animal. • Modify your program to print a statement about each animal, such as A dog
//   would make a great pet. • Add a line at the end of your program stating what these animals have in 
//   common. You could print a sentence such as Any of these animals would make a great pet!

let animals : string [] = ["cat","lion","dog"]

for (let animal of animals) {
    console.log(animal)
}
console.log("\n")

for (let animal of animals){
    console.log(`a  ${animal} has a  tail`)
}

console.log("\n all of these are great pets! but i love cats more")

//task 36

// T-Shirt: Write a function called make_shirt() that accepts a size and
//  the text of a message that should be printed on the shirt. The function
//   should print a sentence summarizing the size of the shirt and the message
//    printed on it. Call the function.

function makeShirt(size: string, text: string): void {
console.log(` you order a ${size} shirt that says ${text}`)
}
makeShirt(`large`,`"i love typescript"`)
makeShirt('medium','"i need a big shirt"')


//task 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with
//  a message that reads I love TypeScript. Make a large shirt and a medium shirt with the 
//  default message, and a shirt of any size with a different message.

function makeShirt (size: string = 'large', text: string = ' i love typescript' ): void {
    console.log(`you have order a ${size}, shirt that says ${text}`)
}
makeShirt();
makeShirt('medium')

//different message
makeShirt('small','i need a big shirt to wear')

//task 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country.
//  The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter
//   for the country a default value. Call your function for three different cities, at least one of
//    which is not in the default country.


 function describe_city (city: string, country: string = "pakistan"): void{
    console.log(`${city} is in ${country}`)
 }

 describe_city('karachi')//defult sentence
describe_city('France', 'Europe' )
describe_city('Lahore' , 'punjab')

//task 39


// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.



function cityCountry(city: string, country: string): string{
    return `${city},${country}`
}
let c1= cityCountry('lahore', 'pakistan')
let c2= cityCountry('tokyo','japan')
let c3= cityCountry('paris','france')
console.log(c1)
console.log(c2)
console.log(c3)

//task 40
// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title, and it should return a Object 
//  containing these two pieces of information. Use the function to make three dictionaries representing
//   different albums. Print each return value to show that Objects are storing the album information correctly.
//    Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the
//     calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one
//      new function call that includes the number of tracks on an album.


function makeAlbum (artist: string, title: string):{artist: string, title: string}{
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1)

       title: title.charAt(0).toUpperCase() + title.slice(1)
    }
    return dictionaries;
}
 let album = makeAlbum("ali","light")
 console.log(album)

 let album = makeAlbum("bilal","red wave")
 console.log(album)
 
 let album = makeAlbum("hamza","seenbreez")
 console.log(album)

 //task 41
//  Magicians: Make a array of magician’s names. Pass the array to a function
//   called show_magicians(), which prints the name of each magician in the array.



function  show_magicians(magicians: string[]): void{

    for (const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician: string[] = ["ali","hamza","bilal"]
show_magicians(magician)

//task 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function
//  called make_great() that modifies the array of magicians by adding the phrase the Great
//   to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great (magicians: string[ ]): void{
    for (let i = 0; i < magicians.length; i  ++) {
        magicians [i] = magicians [i]   +   " the great"
    }
}
const magicians2: string [] = ["ali" ,"hamza" ,"bilal"];
make_great (magicians2)
show_magicians (magicians2)


//task 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function
//  make_great() with a copy of the array of magicians’ names. Because the original
//   array will be unchanged, return the new array and store it in a separate array.
//    Call show_magicians() with each array to show that you have one array of the original
//     names and one array with the Great added to each magician’s name.

function make_great2(magicians: string[]): string[]{
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++){
        greatMagicians.push(magicians[i]+ ' the great');
    }
    return greatMagicians;
}
const magicians3: string[] = [ ' ali' , ' hamza' , ' bilal'];
const greatMagicians2: string[] = make_great2 (magicians3);
show_magicians (magicians3);
show_magicians (greatMagicians2);

//task 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered. Call the function three times,
//    using a different number of arguments each time.

function sandwich(...items: string[]): void{
    console.log("sandwich order:")

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
    
}

console.log("enjoy your sandwich shamaima hassan")

sandwich ('capsicum', 'tomato','chicken')
sandwich('beef','cheese')
sandwich('garlic chicken','mayo sauce')

//task 45

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer 
// and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information 
// and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information 
// was stored correctly.

type car = {
    manufacture: string
    model:string
    [key:string]: any;
}
function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar: car = createCar("toyota","corolla", {color: 'silver' , year: "2024"})
console.log(mycar)
 
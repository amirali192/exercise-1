// first we make 5 parameters 4 for our users and 1 for the site visitor to search for the users which we will call first parameter, next we store every users data in our objects then we get to the search part, and that is if a user was found it will return their data and if the site visitor did not input the corrent user we will display an error and return that instead 
function users(user, user1, user2, user3, user4) {
    let output = 0
    user1 = {
        name: "Jasem",
        lastName: "Amiri",
        age: 10,
        score: 15,
    }
    user2 = {
        name: "Ahmad",
        lastName: "Ghasemi",
        age: 22,
        score: 20,
    }
    user3 = {
        name: "Mohsen",
        lastName: "Ahmadi",
        age: 7,
        score: 5,
    }
    user4 = {
        name: "Mina",
        lastName: "Mohseni",
        age: 72,
        score: 10,
    }
    if (user == "Jasem") {
        output = `${user1.name} ${user1.lastName} is ${user1.age} years old and their score is ${user1.score}.`
    } else if (user == "Ahmad") {
        output = `${user2.name} ${user2.lastName} is ${user2.age} years old and their score is ${user2.score}.`
    } else if (user == "Mohsen") {
        output = `${user3.name} ${user3.lastName} is ${user3.age} years old and their score is ${user3.score}.`
    } else if (user == "Mina") {
        output = `${user4.name} ${user4.lastName} is ${user4.age} years old and their score is ${user4.score}.`
    } else {
        output = "ERROR ! THIS USER DOES NOT EXIST !"
    }
    return output;
}
console.log(users("Jasem"))
console.log(users("Ahmad"))
console.log(users("Mohsen"))
console.log(users("Mina"))
console.log(users(12))
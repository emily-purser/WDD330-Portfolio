import { readLS, writeLS, bindTouch, qs } from "./util.js";

let usersList = [];

//Model Code
function saveUser(username, password, key){
    const newUser = {
        id: new Date(),
        
        username: username,
        password: password
        
    };

    usersList.push(newUser);
    writeLS(key, usersList);
    console.log("Saved User");
}

function getUser(key){
    if(usersList === null) {
        usersList = readLS(key);
    }
    console.log(usersList);
    return usersList;
}

//Controller
//Validation
function checkUser(username, password, key){
    let user1 = readLS(key);
    console.log(user1);

    for(let i in user1) {
        let entry = user1[i]
        if(username == entry.username && password == entry.password) {
            console.log("Log in successful");
            window.location.href = "list.html"
        } else {
            console.log("Login failed");
            document.getElementById('message').innerHTML = '**Login failed. Pleas try again.';
        }
    }
}

//form validation
function checkUsername(username, key){
    console.log("Check Username: ", username);
    if(username == null) {
        console.log("No Username");
        documentj.getElementById('message').innerHTML = "**Username must be filled out";
        return false;
    }
    else { 
        return true;
    }
}
function checkPassword(password, key){

    console.log("check password: " + password);
    if(password == null){
        console.log("No password");
        document.getElementById('message').innerHTML = "**Password Field must be filled out"
        return false;
    }
    if(password.length < 8) {
        console.log("password too short");
        document.getElementById('message').innerHTML = "**Password must be at least 8 characters long"
        return false;
    } else {
        return true;
    }
    
}

export default class User{
    constructor(key, listElement){
        this.key = key;
        bindTouch('#createUser', this.addUser.bind(this));
        bindTouch('#login', this.verifyUser.bind(this));
    }
    addUser(event){
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let message = document.getElementById('message');
        if (checkPassword(password) === true && checkUsername(username) == true) {
            saveUser(username, password, this.key);
        } else {
            event.preventDefault();
            message.innerHTML = '**Passwords must be 8 characters in length';
            this.addUser();
        }
        
    }
    verifyUser(){
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        console.log(username);
        checkUser(username, password);
    }
}
#! /usr/bin/env node
import inquirer from "inquirer";
//class for a player.
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrese() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrese() {
        this.fuel = 100;
    }
}
//class for enemy
class enemy {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrese() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
//Using prompt to get data of user.
let user = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Your name"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your enemy",
        choices: ["Zombie", "Skeleton", "Alien"]
    }
]);
let p1 = new player(user.name);
let e1 = new enemy(opponent.select);
while (true) {
    //Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink portion", "run"]
            }
        ]);
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose!");
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if (e1.fuel <= 0) {
                    console.log("You win..!");
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink portion") {
            p1.fuelIncrese();
            console.log(`Dear ${p1.name} Your fuel is ${p1.fuel}`);
        }
        if (ask.option == "run") {
            console.log("You loose! Try again");
            process.exit();
        }
    }
    //Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink portion", "run"]
            }
        ]);
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose!");
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if (e1.fuel <= 0) {
                    console.log("You win..!");
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink portion") {
            p1.fuelIncrese();
            console.log(`Dear ${p1.name} Your fuel is ${p1.fuel}`);
        }
        if (ask.option == "run") {
            console.log("You loose! Try gain..");
            process.exit();
        }
    }
    //Alien
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink portion", "run"]
            }
        ]);
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose!");
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if (e1.fuel <= 0) {
                    console.log("You win..!");
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink portion") {
            p1.fuelIncrese();
            console.log(`Dear ${p1.name} Your fuel is ${p1.fuel}`);
        }
        if (ask.option == "run") {
            console.log("You loose");
            process.exit();
        }
    }
}

const Person = require('./person');
const Theme = require('./theme');
const { MALAM_capitalize } = require('./utils');

class App {
    constructor() {
        this._theme = new Theme();
        this._users = [];
    }

    MALAM_addUser(name, age, email) {
        const person = new Person(MALAM_capitalize(name), age, email);
        this._users.push(person);
        return person;
    }

    MALAM_getUsers() {
        return this._users;
    }

    MALAM_getTheme() {
        return this._theme;
    }

    MALAM_run() {
        console.log('Malam app started');
        console.log(`Theme: ${this._theme.MALAM_getMode()}`);
    }
}

const app = new App();
app.MALAM_run();

module.exports = App;

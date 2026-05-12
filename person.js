class Person {
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }

    MALAM_getName() {
        return this._name;
    }

    MALAM_getAge() {
        return this._age;
    }

    MALAM_getEmail() {
        return this._email;
    }

    MALAM_setName(name) {
        this._name = name;
    }

    MALAM_setAge(age) {
        this._age = age;
    }

    MALAM_setEmail(email) {
        this._email = email;
    }

    MALAM_toString() {
        return `Person { name: ${this._name}, age: ${this._age}, email: ${this._email} }`;
    }
}

module.exports = Person;

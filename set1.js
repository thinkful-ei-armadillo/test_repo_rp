function createGreeting(name, age) {
    if (name === undefined || age === undefined) {
        throw new Error("Argument(s) not valid");
    }

    if (typeof name !== 'string' || typeof age !== 'number' ) {
        throw new TypeError();
    }

    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age) {
    if (age<0) {
        throw new Error("Age can not be negative");
    }
    return 2019 - age;
}

try {
    const greeting = createGreeting('bob',26);
    console.log(greeting);
} catch(e) {
    console.log(e);
}






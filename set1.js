function createGreeting(name, age) {
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}`;
};

function getYearOfBirth(age) {
    if (age<0) {
        throw new Error("Age can not be negative");
    }
    return 2019 - age;
}
try {
    const greeting = createGreeting();
} catch(e) {
    console.log(e);
}

console.log(greeting);





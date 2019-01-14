function createGreeting(name, age) {
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}`;
};

function getYearOfBirth(age) {
    
    return 2019 - age;
}

const greeting = createGreeting();

console.log(greeting);





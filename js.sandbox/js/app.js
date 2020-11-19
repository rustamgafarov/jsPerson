let name = "Rustam Gafarov";
let age = 16;
let city = "Tallinn";
let drivingLicence = "";
console.log(`Character: ${name}, Age: ${age}, City: ${city}`);

if(age < 18){
    drivingLicence = (`${name} is too young to drive a car.`);
} else {
    drivingLicence = (`${name} is old enough to drive a car.`);
}

console.log(drivingLicence);

const html  = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>City: ${city} </li>
        <li>${drivingLicence} </li>
    </ul>
`;

document.body.innerHTML = html
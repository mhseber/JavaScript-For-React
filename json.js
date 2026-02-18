const person = {
    name: "seber",
    age: 40,
    friends: ["adul", "babul", "kabul"],
    family:{
        fathersname: "aosmim",
        mothersname: "josuedhb",
    }
};

const jsonData = JSON.stringify(person);
const planData = JSON.parse(jsonData);
console.log(planData)
const electronics = [
    { name: 'Laptop', price: 80000, brand: 'HP', color: 'Silver' },
    { name: 'Phone', price: 25000, brand: 'Samsung', color: 'Black' },
    { name: 'Watch', price: 5000, brand: 'Xiaomi', color: 'Black' },
    { name: 'Tablet', price: 35000, brand: 'Apple', color: 'White' }
];


// 🏆 Task 1: The Product Filter (Array Methods & Spread)

// filter 
const PColor = electronics.filter(pro => pro.color === "Black")
console.log(PColor)
console.log("---------------------------------------------")


//.find()
const brands = electronics.find(fin=>fin.brand === "Samsung")
console.log(brands)
console.log("---------------------------------------------")


// Spread Operator

const newProduct = { name: 'Camera', price: 45000, brand: 'Sony', color: 'Silver' };
const pushPro = [...electronics, newProduct]
console.log(pushPro)
console.log("---------------------------------------------")





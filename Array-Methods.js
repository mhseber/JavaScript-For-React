// Array Methods Map Filter Find ForEach

const Products = [
    { name: "Xaiomi", brand: "Redmi", price: "20000", color: "Red", code: "1122", version: "2"},
    { name: "Samsung", brand: "Galxies", price: "50000", color: "Black", code: "2211", version: "3"},
    { name: "Honor", brand: "X6c", price: "35000", color: "gray", code: "hug2", version: "3"},
    { name: "Vivo", brand: "sskw2", price: "10000", color: "white", code: "4431a", version: "7"},
    { name: "Realmi", brand: "prova", price: "15000", color: "ass", code: "aw1", version: "1"}
]

// const result = Products.map(pro => pro.price)
// console.log(result)



// Products.forEach(pro => {
//     console.log(pro.name)
// })


// const result = Products.filter(pro =>pro.price <=10000)

// console.log(result)




const find = Products.find(pro => pro.name === "Vivo")
console.log(find)
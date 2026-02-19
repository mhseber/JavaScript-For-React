const student = {
    id: 101,
    info: {
        fullName: "Seber",
        address: "Dhaka"
    },
    marks: [85, 90, 78],
    isScholarship: false
};


// 🏆 Task 2: Advanced Destructuring & Short-circuit


//Object Destructuring
  const {fullName,address} = student.info;
  console.log(fullName,address)



// Array Destructuring

 const [first,second] = student.marks
 console.log(first,second)


// Logical AND (&&)
student.isScholarship && console.log("Eligible for Discount")
const classInfo={
  sanoj :{
    age : 25,
    city : "Delhi"
  },
  aman:{
    age : 26,
    city : "Mumbai"
  },
  abhi :{
    age : 27,
    city : "Bangalore"
  }
}

console.log(classInfo.sanoj.age) // 25
console.log(classInfo.sanoj) // { age: 25, city: "Delhi" }
console.log(classInfo.aman.city) // Mumbai
classInfo.abhi.city = "Chennai"
console.log(classInfo.abhi.city) // Chennai

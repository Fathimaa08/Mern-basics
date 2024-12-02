  var students=[
    {
        id:"S1",
        Name:"Fathima",
        age:21
    },
   {
        id:"S2",
        Name:"Sreelaya",
        age:21
    },
   {
        id:"S3",
        Name:"Faseela",
        age:20
    },
   {
        id:"S4",
        Name:"Anas",
        age:21
    }
  ]
let age=students.map(i=> {
    return i.age+5;
});
console.log(age)
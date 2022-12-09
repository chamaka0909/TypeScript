// let message = "hello world"
// console.log(message)

// --- cant assighn number to string 

// let age:number = 10;
// age='a'
// let age:number = 10;


// --- Built in types
// -- any type

// let level :any=5
// level ='s'


// --In tsconfig file  "noImplicitAny": false,  theen you no need to use any type

// function render(document:any)
// {
//     console.log(document)
// }


//-- Arrays

// let number:number[] = [1,2,'3']
// let numbers:number[] = []
// numbers[0]=1;
// numbers[1]='s'


//-- tuples

//let user:[number,string]=[1,'kamal']
// user[0].  -- enable all number element
// user[1].  -- enable alll string element
// user.push(1)


//-- enums

// const small =1;
// const medium =2;
// const large =3;

// enum Size {Small=0,Medium,Large};
// let mySize:Size = Size.Medium;
// console.log(mySize)


//-- functions

// function calculateTax(income:number,taxtear =2022):number{

//     if(taxtear<2022)
//     return income * 1.2;
//     return income *1.3;
// }

// calculateTax(10000);


// -- objects

// let employee:{
//     readonly id:number,
//     name:string,
//     retire:(date:Date)=>void
// } = {

//     id:1,
//     name:'mosh',
//     retire:(date:Date)=>{
//         console.log(date);
//     }
// }


// -- Aliases - >reuse the codes

// type Employee={
//     readonly id:number,
//     name:string,
//     retire:(date:Date)=>void
// }

// let employee:Employee={

//     id:1,
//     name:'mosh',
//     retire:(date:Date)=>{
//         console.log(date);
//     }
// }


// -- Unions
//-- weight. -- only show comman types in number and string both

// function abc(wegiht:number | string):number{
//     //narrowing

//     if(typeof wegiht === 'number')
//         return wegiht *2.2;

//     else
//         return parseInt(wegiht) * 2.2

// }

// abc(2)
// abc('s')


// -- intersection  -- object number and the string same time

// type Draggable = {
//     drag:()=>void
// }

// type Resizable = {
//     resize:()=>void
// }

// type UIWidget = Draggable & Resizable;

// let textBox : UIWidget={

//     drag:()=>{},
//     resize:()=>{}

// }


// -- Literal
// -- limit value assighn in variable

// type Quantity = 50|100;
// let quantity:Quantity = 100;

//nullable types
// "strictNullChecks": false,

// function great(name:string){
//     console.log(name.toUpperCase());
// }

// great(null)


// -- interfaces
// -- create person interface
// -- ? optional --registration form optional fields

// interface Person{
//     firstName:string,
//     lastName?:string
// }

// function fullName(person:Person){
//     console.log(`${person.firstName} ${person.lastName}`)
// }

// let p={
//     firstName :"chamaka",
//     lastName:"Mendis"
// }

// fullName(p)



// -- classes

// class Employee {
//    employeeName: string;

//   constructor(name: string) {
//     this.employeeName = name;
//   }

//   great() {
//     console.log(`God Morning ${this.employeeName}`);
//   }
// }

// let emp1 = new Employee("chamaka");

// console.log(emp1.employeeName);
// emp1.great();


// -- inheritance

// class managerName extends Employee {
//   constructor(managerName: string) {
//     super(managerName);
//   }
//   work() {
//     console.log(`manager look at tasks ${this.employeeName}`);
//   }
// }

// let m1 = new managerName("chamaka");
// m1.great();
// m1.work();
// console.log(m1.employeeName);


// -- private - only access within a class
// -- protected - dirrived class can access, but out side of the classee can't access

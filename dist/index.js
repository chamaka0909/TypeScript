"use strict";
class Employee {
    constructor(name) {
        this.employeeName = name;
    }
    great() {
        console.log(`God Morning ${this.employeeName}`);
    }
}
let emp1 = new Employee("chamaka");
console.log(emp1.employeeName);
emp1.great();
class managerName extends Employee {
    constructor(managerName) {
        super(managerName);
    }
    work() {
        console.log(`manager look at tasks ${this.employeeName}`);
    }
}
let m1 = new managerName("chamaka");
m1.great();
m1.work();
console.log(m1.employeeName);

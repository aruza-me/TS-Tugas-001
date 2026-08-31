/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */
type Data = {
    Id: number
    FullName: string
    Age: number
    ActiveStudent:boolean
};
const Azura:Data ={
    Id: 191210,
    FullName: "Azura Junaidi",
    Age: 16,
    ActiveStudent:true
};
const Aruza :Data ={
    Id: 201210,
    FullName: "Aruza Idianaju",
    Age: 17,
    ActiveStudent:true
};
const Uzaru:Data ={
    Id: 181210,
    FullName: "Uruza Janiadu",
    Age: 33,
    ActiveStudent:false
};

console.log(Azura)
console.log(Aruza)
console.log(Uzaru)

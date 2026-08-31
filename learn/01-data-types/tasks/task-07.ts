/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
    StudentID: number
    FullName: string
    GradeLevel: number
    CourseID: number
    CourseTitle: string
    InstructorName: string
    TotalLearningHours: number
    RegistrationDate: string
    PaymentCompleted: boolean
}

const registration1: Registration = {
    StudentID: 1042,
    FullName: "Robin",
    GradeLevel: 10,
    CourseID: 8841,
    CourseTitle: "Intro to Harmony",
    InstructorName: "Xipe",
    TotalLearningHours: 100,
    RegistrationDate: "27-08-2026",
    PaymentCompleted: true
}

const registration2: Registration = {
    StudentID: 2198,
    FullName: "Sunday",
    GradeLevel: 12,
    CourseID: 9932,
    CourseTitle: "Intro to Order",
    InstructorName: "Ena",
    TotalLearningHours: 15,
    RegistrationDate: "28-08-2026",
    PaymentCompleted: false
}

const registration3: Registration = {
    StudentID: 3315,
    FullName: "Argenti",
    GradeLevel: 11,
    CourseID: 7720,
    CourseTitle: "Intro to beauty",
    InstructorName: "Edrila",
    TotalLearningHours: 55,
    RegistrationDate: "29-08-2026",
    PaymentCompleted: true
}

console.log(registration1)
console.log(registration2)
console.log(registration3)
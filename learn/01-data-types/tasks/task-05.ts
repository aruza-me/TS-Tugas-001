/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */
type Attendance = {
    EmployeeID: string
    EmployeeName: string
    Date: string
    CheckInTime: string
    CheckOutTime: string
    TotalWorkingHours: number
    IsPresent: boolean
}

const attendance1: Attendance = {
    EmployeeID: "ESP-101",
    EmployeeName: "Skibidi Lite",
    Date: "23-3-2026",
    CheckInTime: "08:45 AM",
    CheckOutTime: "05:15 PM",
    TotalWorkingHours: 8.5,
    IsPresent: true
}

const attendance2: Attendance = {
    EmployeeID: "ESP-204",
    EmployeeName: "Lil Toilet",
    Date: "15-3-2026",
    CheckInTime: "09:15 AM",
    CheckOutTime: "06:15 PM",
    TotalWorkingHours: 9,
    IsPresent: true
}

const attendance3: Attendance = {
    EmployeeID: "ESP-305",
    EmployeeName: "Bor Camura",
    Date: "11-3-2026",
    CheckInTime: "-",
    CheckOutTime: "-",
    TotalWorkingHours: 0,
    IsPresent: false
}

console.log(attendance1)
console.log(attendance2)
console.log(attendance3)
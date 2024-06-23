//PROJECT HOMEWORK OF UNIVERSITY MANAGEMENT SYSTEM
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
;
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, rollNumber) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.rollNumber = rollNumber;
        return _this;
    }
    student.prototype.registerForcourses = function (course) {
        this.courses.push();
    };
    return student;
}(Person));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.salary = salary;
        return _this;
    }
    Instructor.prototype.assignCourse = function (course) {
        this.courses.push(course);
    };
    return Instructor;
}(Person));
var std1 = new student("nameera", 22, "1234");
var std2 = new student("ali", 22, "1342");
var Instructor1 = new Instructor("arham", 30, 100000);
var Instructor2 = new Instructor("usama", 32, 50000);
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.students = [];
        this.instructors = [];
        this.id = id;
        this.name = name;
    }
    Course.prototype.addStudent = function (std) {
        this.students.push(std);
    };
    Course.prototype.setInstructor = function (instructor) {
        this.instructors.push(instructor);
    };
    return Course;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.courses = [];
        this.name = name;
    }
    Department.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    return Department;
}());
var course1 = new Course(1, "Blockchain");
var course2 = new Course(2, "Metaverse");
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);
course1.setInstructor(Instructor1);
course2.setInstructor(Instructor2);
console.log(course1.students);
var d1 = new Department("computer sceience");
d1.addCourse(course1);
console.log(d1.courses[0]);
//student1.registerForcourses("Metaverse")
//student1.registerForcourses("BCC")
//console.log(student1.courses)
//console.log(student2.courses)

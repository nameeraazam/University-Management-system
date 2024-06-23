//PROJECT HOMEWORK OF UNIVERSITY MANAGEMENT SYSTEM.................;

class Person {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name
         this.age = age       
    }   
};

class student extends Person {
    rollNumber: string;
    courses: Course[] = [];

    constructor( name:string, age:number,rollNumber: string) {
        super(name, age)
        this.rollNumber = rollNumber
    }

    registerForcourses(course:string){
       this.courses.push();
    }

}

class Instructor extends Person {
    salary:number;
    courses: Course[] = [];

     constructor(name: string, age:number, salary: number ) {
        super(name, age);
        this.salary = salary;
     }
     assignCourse(course: Course) {
        this.courses.push(course);
     }
  }

const std1 = new student("nameera",22,"1234");
const std2= new student("ali",22,"1342");

const Instructor1 = new Instructor("arham",30,100000)
const Instructor2 = new Instructor("usama",32,50000)

class Course {
    id:number;
    name: string;
    students: student[] =[]
    instructors: Instructor[] = []

    constructor(id:number, name: string) {
        this.id = id;
        this.name = name;
    }
addStudent (std:student) {
     this.students.push(std)
}

setInstructor(instructor:Instructor)  {
      this.instructors.push(instructor)
   }
}


class Department {
    name: string;
    courses: Course[] = [];
    constructor(name: string) {
        this.name = name;
    }
    
    addCourse(course:Course){
        this.courses.push(course)
    }
}

const course1 = new Course(1,"Blockchain");
const course2 = new Course(2, "Metaverse");


course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);


course1.setInstructor(Instructor1)
course2.setInstructor(Instructor2)

console.log(course1.students);

const d1= new Department("computer sceience");
d1.addCourse(course1);

console.log(d1.courses[0])

//student1.registerForcourses("Metaverse")
//student1.registerForcourses("BCC")
//console.log(student1.courses)



//console.log(student2.courses)

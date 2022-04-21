class Student {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name} is in grade ${this.age}.`;
    }
}

class Gradelevel {
    constructor(grade) {
        this.grade = grade;
        this.students = [];
    }
    addStudent(student){
        if (sutdent instanceof student){
            this.students.push(student);
        }else {
            throw new Error(`You can only add and instance of student. Argument is not a player: ${student}`);
        }
    }

    removeStudent(name) {
        // loop through students array, 
    }

    describe() {
        return `${this.name} is in ${this.grade}.`;
    }
}

class MenuApp {
    constructor() {
        this.gradeLevels = [];
        this.selectedGrade = null;
    }

    showOptions() {
        return prompt(`
            1) create level
            2) delete grade level
            3) view grade levels
        `)
    };

    createGradeLevel() {
        let grade = prompt("enter grade level:");
        this.gradeLevels.push(new Gradelevel(grade));
        console.log('lolwut', this.gradeLevels);
    }

    viewGrade() {
        // display students in grade
        // prompt for create/delete students
        // switch based on choice and add/remove instance of student class
    }

    deleteGrade() {

    }

    run() {
        let selection = this.showOptions();
        switch(selection) {
            case "1":
                this.createGradeLevel();
                break;
            case "2":
                this.deleteGrade();
                break;
            case "3":
                this.viewGrade();
                break;
        }
        selection = this.showOptions();
    }
}

const menu = new MenuApp();
menu.run();
import {Student} from "./Student";
import {readlineSync} from "../Main";

export class ManagerStudents {
    private readonly listStudent: Student[];

    constructor() {
        this.listStudent = [];
    }

    showListStudent() {
        if (this.listStudent.length === 0) {
            console.log(`No data exist! `);
            return
        }
        let newListFiveStudents: Student[] = [];
        for (let i = 0; i < this.listStudent.length; i++) {
            newListFiveStudents.push(this.listStudent[i])
            if (i === 4) {
                break
            }
        }
        console.table(newListFiveStudents);
    }

    findStudentByName() {
        let inputName = readlineSync.question(`Input Name of Student: `)
        let listApproximateNameStudent: Student[] = [];
        this.listStudent.forEach(elements => {
            if (elements.getNameStudent().toLowerCase().includes(inputName.toLowerCase())) {
                listApproximateNameStudent.push(elements);
            }
        })
        if (listApproximateNameStudent.length === 0) {
            console.log(`No data matching! `)
            return;
        }
        for (let i = 0; i < listApproximateNameStudent.length; i++) {
            console.log(`Information of Student:  ${i + 1}`);
            console.log(`ID of Student: ${listApproximateNameStudent[i].getIdStudent()}`);
            console.log(`Class of Student: ${listApproximateNameStudent[i].getClassStudent()}`);
            console.log(`Address of Student: ${listApproximateNameStudent[i].getAddress()}`);
            console.log(`Point of Student: ${listApproximateNameStudent[i].getPoint()}`);
            console.log(`------`);
        }
    }

    inputInformationOfNewStudent(): Student | undefined {
        let classDefault: string[] = ['C0223G1', 'C0223H1', 'C0223A1'];
        let idStudent = readlineSync.question(`Enter id:`)
        if (this.findIndexStudentByID(idStudent) !== -1) {
            console.log(`This is invalid! }`)
            return
        }
        let nameStudent = readlineSync.question(`Enter name: `);
        let indexClassOfStudent = readlineSync.keyInSelect(classDefault, `Enter class: `, {cancel: 'C0223E1'});
        let classOfStudent: string;
        switch (indexClassOfStudent) {
            case 0:
                classOfStudent = classDefault[0];
                break;
            case 1:
                classOfStudent = classDefault[1];
                break;
            case 2:
                classOfStudent = classDefault[2];
                break;
            default:
                classOfStudent = 'C0223E1'
                break;
        }
        let addressOfStudent = readlineSync.question(`Enter address: `);
        let pointOfStudent = readlineSync.question(`Enter point:`);
        let hobbyOfStudent = readlineSync.question(`Enter hobby: `);
        if (nameStudent.length === 0 || classOfStudent.length === 0
            || addressOfStudent.length === 0 || pointOfStudent.length === 0 || hobbyOfStudent.length === 0) {
            console.log(`Input information is invalid! Please re-enter..`);
            return;
        }
        return new Student(idStudent, nameStudent, classOfStudent, addressOfStudent, pointOfStudent, hobbyOfStudent);
    }

    addNewStudent() {
        let newStudentNeedAdd = this.inputInformationOfNewStudent();
        if (newStudentNeedAdd) {
            this.listStudent.push(newStudentNeedAdd);
        }
        console.log(`Add new student successful! `)

    }

    findIndexStudentByID(id: string) {

        return this.listStudent.findIndex(elements => id === elements.getIdStudent());
    }

    editInfoOfStudent() {
        let idStudent = readlineSync.question(`Enter ID need to find: `);
        if (this.findIndexStudentByID(idStudent) === -1) {
            console.log(`This ID is invalid! `)
            return
        }
        let index = this.findIndexStudentByID(idStudent);
        if (index !== -1) {
            let updateStudent = this.inputInformationOfNewStudent();
            if (updateStudent) {
                this.listStudent[index].setNameStudent(updateStudent.getNameStudent());
                this.listStudent[index].setClassStudent(updateStudent.getClassStudent());
                this.listStudent[index].setAddress(updateStudent.getAddress());
                this.listStudent[index].setPoint(updateStudent.getPoint());
                this.listStudent[index].setHobby(updateStudent.getHobby());
            }
            console.log('Edit Information of Student successfully!');
        }
    }

    deleteStudentByID() {
        let idStudent = readlineSync.question(`Enter ID need to find: `);
        let index = this.findIndexStudentByID(idStudent);
        if (index === -1) {
            console.log(`Not existed Student need to delete!`);
            return;
        }
        this.listStudent.splice(index, 1);
        console.log('Delete Student Successful!');
    }
}
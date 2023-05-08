import {ManagerStudents} from "./src/ManagerStudents";

export  let readlineSync = require('readline-sync');
let managerStudents: ManagerStudents = new ManagerStudents();
let menuFunction: string[] = [
    'Show list Student',
    'Search Student (by name)',
    'Add New Student',
    'Edit information of Student',
    'Delete Student'
]

function init() {
    let loop: boolean = true;
    while (loop) {
        switch (keySelect(menuFunction)) {
            case 0:
                managerStudents.showListStudent();
                pressEnterToBack();
                break;
            case 1:
                managerStudents.findStudentByName();
                pressEnterToBack();
                break;
            case 2:
                managerStudents.addNewStudent();
                pressEnterToBack();
                break;
            case 3:
                managerStudents.editInfoOfStudent()
                pressEnterToBack();
                break;
            case 4:
                managerStudents.deleteStudentByID()
                pressEnterToBack();
                break;
            default:
                if(readlineSync.keyInYN(`Are you sure?`)){
                    loop = false;
                }
        }
    }
}
function keySelect(data: string[]) {
    return readlineSync.keyInSelect(data, 'Select function:')
}
export function pressEnterToBack(){
    return readlineSync.question(`Press Enter To Back...`);
}
init();
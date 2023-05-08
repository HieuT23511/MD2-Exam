export  let readlineSync = require('readline-sync');

let menuFunction: string[] = [
    'Show list Student',
    'Search Student (by name)',
    'Add information of Student',
    'Edit information of Student',
    'Delete Student'
]

function init() {
    let loop: boolean = true;
    while (loop) {
        switch (keySelect(menuFunction)) {
            case 0:
                pressEnterToBack();
                break;
            case 1:
                pressEnterToBack();
                break;
            case 2:
                pressEnterToBack();
                break;
            case 3:
                pressEnterToBack();
                break;
            case 4:
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
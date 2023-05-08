export class Student{
    private _idStudent : string;
    private _nameStudent: string;
    private _classStudent: string;
    private _address: string;
    private _point : string;
    private _hobby: string;


    constructor(idStudent: string, nameStudent: string, classStudent: string, address: string, point: string, hobby: string) {
        this._idStudent = idStudent;
        this._nameStudent = nameStudent;
        this._classStudent = classStudent;
        this._address = address;
        this._point = point;
        this._hobby = hobby;
    }

    getIdStudent(): string {
        return this._idStudent;
    }

    setIdStudent(value: string) {
        this._idStudent = value;
    }

    getNameStudent(): string {
        return this._nameStudent;
    }

    setNameStudent(value: string) {
        this._nameStudent = value;
    }

    getClassStudent(): string {
        return this._classStudent;
    }

    setClassStudent(value: string) {
        this._classStudent = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getPoint(): string {
        return this._point;
    }

    setPoint(value: string) {
        this._point = value;
    }

    getHobby(): string {
        return this._hobby;
    }

    setHobby(value: string) {
        this._hobby = value;
    }
}
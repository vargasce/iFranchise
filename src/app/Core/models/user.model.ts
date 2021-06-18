export class UserModel {

    public id : number;
    // public name : string;
    // public last_name : string;
    // public user : string;
    // public email : string;
    // public password : string;

    constructor(
        public name : string,
        public last_name : string,
        public user : string,
        public email : string,
        public password : string,
    ){

    }
}
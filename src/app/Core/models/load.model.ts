export class LoadModel {

    public id : number;
    // public id_product : number;
    // public quantity : number;
    // public load_date : Date;
    // public price_buy : number;

    constructor(
        public id_product : number,
        public quantity : number,
        public load_date : Date,
        public price_buy : number,
    ){

    }
}
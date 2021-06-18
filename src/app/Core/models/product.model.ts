export class ProductModel {

    public id : number;
    // public id_type : number;
    // public name : string;
    // public brand : string;
    // public price_buy : number;
    // public price_sell : number;
    // public price_wholesale : number;
    // public description : string;
    // public product_code : string;
    // public photo : string;

    constructor(
        public id_type : number,
        public name : string,
        public brand : string,
        public price_buy : number,
        public price_sell : number,
        public price_wholesale : number,
        public description : string,
        public product_code : string,
        public photo : string,
    ){

    }
}
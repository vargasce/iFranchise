export class SellModel {

    public id : number;
    // public id_detail_sell : number;
    // public id_client : number;
    // public id_type_shipping : number;
    // public id_tracking : string;
    // public status : string;
    // public sell_date : Date;
    // public total : number;

    constructor(  
        public id_detail_sell : number,
        public id_client : number,
        public id_type_shipping : number,
        public id_tracking : string,
        public status : string,
        public sell_date : Date,
        public total : number,        
    ){
    }
}
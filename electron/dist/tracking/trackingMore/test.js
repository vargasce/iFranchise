const Tracking = require('./tracking');
const Tracking2 = require('../cArgentino/tracking');
const tracker2 = new Tracking2('','','');
const tracker = new Tracking('','','');


//tracker.prueba();

const testConnection = async () =>{
   
   try{
      //let data = await tracker.isConnection();
      //console.log(data);

      //let getCourier = await tracker.get(`carriers`);
      //console.log( getCourier );

      let result = await tracker2.getRequestCA('ec','0000731655770XP12GLC401');
      let { data } = result;
      console.log( data );
      
   }catch( error ){
      console.log( `Error in request : ${error}` );
   }
}

testConnection();


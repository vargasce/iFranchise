'use strict'
const sqlite = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const dirPath = path.join( __dirname,'dataDB.db');

const conectionDB = ( function(){

	let _instanceDB = null;

	function init(){

		let _db = null;
		if( fs.existsSync(dirPath) ){
			_db = new sqlite.Database(dirPath, sqlite.OPEN_READWRITE, (error)=>{
				if( !error ){
					_instanceDB = _db;
				}
			});
		}else{
      console.log(`Error file DB not exists : ${dirPath} -> ruoute not found`);
		}
	
		return {
			request : function(){
				return _db;
			},
			close : function(){
				_db.close();
			}
		}
	}

	return {
		getInstance : function(){

			if( !_instanceDB ){
				_instanceDB = init().request();
			}

			return _instanceDB;
		}
	}
})();


module.exports = {
	conectionDB : conectionDB
};

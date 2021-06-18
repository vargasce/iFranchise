import { Injectable } from '@angular/core/';




@Injectable()
export class CustomDateService {
    
    public date : Date;

    constructor(
    ){ 
        this.date = new Date();
    } 

    /** SERIAL DATE FORMAT
     * @observations RETORNA LA FECHA EN FORMATO SERIALIZADO
     * @param fecha : Date
     * @returns : string con formato 1997-05-19
     */
    serialDateFormat( fecha : Date):string{
        let dia = ("0" + fecha.getDate().toString).slice(-2);
        let mes = ("0" + (fecha.getMonth() + 1).toString()).slice(-2);
        let año = fecha.getFullYear().toString();

        return año + "-" + mes + "-" + dia;
    }

    /** PERIOD DATE FORMAT
     * @observations RETORNA LA FECHA EN FORMATO
     * @param fecha : Date
     * @returns : string con formato 1997-05
     */
    periodDateFormat( fecha : Date):string{
        let mes = ("0"+ (fecha.getMonth() + 1 ).toString()).slice(-2);
        let año = fecha.getFullYear().toString();
        return año + "-" + mes;
    }

    /** DATE COMPARATOR
     * @observations COMPARO DOS FECHAS PARA CORROBORAR QUE UNA SEA MAYOR A LA OTRA
     * @param since : Date
     * @param until : Date
     * @returns : boolean   TRUE IF until > since or until = since // FALSE if since > until
     */
    dateComparator( since : Date , until : Date):boolean{
        let continuo = true;
        if ( since.getFullYear() <= until.getFullYear() ){
            if ( since.getMonth() + 1 <= until.getMonth() + 1 ){
                if ( since.getDate() > until.getDate() ){
                    continuo = false;
                };
            }else{
                continuo = false;
            };
        }else{
            continuo = false;
        };
    
        return continuo
    }
    
    

    /** ACTUAL SERIAL DATE
     * @observations : FECHA ACTUAL EN FORMATO SERIALIZADO
     * @returns : string con formato 1997-05-19
     */
    actualSerialDate(){
        return this.serialDateFormat( this.date );
    }

    /** ACTUAL PERIOD DATE
     * @observations : FECHA ACTUAL EN FORMATO PERIODO
     * @returns : string con formato 1997-05
     */
    actualPeriodDate(){
        return this.periodDateFormat( this.date );
    }



}
import { LightningElement,track } from 'lwc';

export default class LWC2 extends LightningElement {
@track isTrue = false;
@track CountryCities =['Hyderabad','Calcutta','Madras'];
Hnadler(event){

    this.isTrue = event.target.checked;
}

}
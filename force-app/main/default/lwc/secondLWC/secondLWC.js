import { LightningElement,track } from 'lwc';

export default class SecondLWC extends LightningElement {
     @track DynamicValue = 'World';
    onChangeHandler(event){
      this.DynamicValue = event.target.value;

    }

}
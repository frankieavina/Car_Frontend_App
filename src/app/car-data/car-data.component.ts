import { Component, OnInit,Input,NgModule, Output, EventEmitter } from '@angular/core';
import {Car} from "../car";
import {CarModelInfo} from "../car.model";
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-car-data',
  templateUrl: './car-data.component.html',
  styleUrls: ['./car-data.component.css']
})
export class CarDataComponent implements OnInit {
  @Input() car ?: Car; 
  @Output() updateisComplete = new EventEmitter();  

  constructor(private carService: CarsService) { }

  ngOnInit(): void {
  }

  // Deleting car 
  async onDeleteCar(carID: HTMLInputElement,){
    const ID4car = parseInt(carID.value,10);
    await this.carService.deleteCars(ID4car);
    this.updateComplete(); 
  }

  // Canceling the card info card 
  onCancelCar(){
    delete this.car;
  }


  //Updating the card info 
  async onUpdateCar(idInput: HTMLInputElement, makeInput: HTMLInputElement, modelInput: HTMLInputElement, urlInput: HTMLInputElement){

    const numberIn = parseInt(idInput.value,10);
   
     const ingID = numberIn;
     const ingMake = makeInput.value;
     const ingModel = modelInput.value;
     const ingUrl = urlInput.value; 

    const updateCars = new CarModelInfo(ingID,ingMake,ingModel,ingUrl);

    await this.carService.updateCar(updateCars); 
    this.updateComplete; 

  }

  updateComplete(){
    this.updateisComplete.emit("complete");
  }

}

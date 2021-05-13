import { Component, OnInit, NgModule } from '@angular/core';
import {Car} from "./car";
import {CarsService} from "./cars.service";
import {CarModelInfo} from "./car.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-data-app';

  cars: Car[] = [];
   
  // defining selectedContacts as a type Contact
  selectedCar ?: Car;

  //Constructor
  constructor(private carService: CarsService) {}

  // initialization on lifecycle hook so we get the contacts
  ngOnInit(): void {
    this.ongetCars();
  }

  // method the retrieve the contacts from the service
  ongetCars(){
   this.carService.getCars().then(res=> {this.cars = res;})
  }

  // click event handler
  onSelect(car: Car) {
    //this.carService.getCar(car.id).then( res => {this.selectedCar = res; } )
    this.selectedCar = car; 
  }

  // when adding a contact 
  async onAddCar(idInput: HTMLInputElement, makeInput: HTMLInputElement, modelInput: HTMLInputElement, urlInput: HTMLInputElement){

    // assigning values phoneInput turning string to number
    const ingID = parseInt(idInput.value,10);
    const ingMake = makeInput.value;
    const ingModel = modelInput.value;
    const ingUrl = urlInput.value; 
    

    // getting values and making a new type contact array
    const newCar  = new CarModelInfo(ingID, ingMake, ingModel,ingUrl);
    // passing them to my service
    await this.carService.addCars(newCar);
    this.ongetCars();  
   }

   // update car list after updating and deleting info from card-data componenet
   updateCarInfo(){
     this.ongetCars(); 
   }


}

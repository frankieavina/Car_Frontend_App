import { Injectable } from '@angular/core'; 
import {HttpClient} from '@angular/common/http';

import {API_URL} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  // boolean that keeps track of needing an update

  constructor(private http: HttpClient) { }

    //--------------- getting contact information -----------------------
    getCars(): Promise<any> { 
      return this.http.get(`${API_URL}/`).toPromise(); 
    }

    //--- update info on specific Car-------------------------
    async updateCar(body: { id: number; make: string; model: string; url: string;}){
      await this.http.put(`${API_URL}/`,body).toPromise();  
    }
  
    //------- deleting data depending on selected name ------------------
    async deleteCars(contactDelete: number){
      await this.http.delete(`${API_URL}/${contactDelete}`).toPromise(); 
     }

     //--------------- adding cars to db -------------------------
    async addCars(body: { id: number; make: string; model: string; url: string;}){
      await this.http.post(`${API_URL}/`, body).toPromise();
     }


}

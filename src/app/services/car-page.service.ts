import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarPageService {
  apiUrl="https://localhost:44392/api/"
  setCurrentCar:Car
  constructor(private httpClient:HttpClient,private toastrService:ToastrService) { }


  getCarById(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailbyid?id="+carId
    this.toastrService.info("Sayfaya gidildi")
    return this.httpClient.get<SingleResponseModel<Car>>(newPath)
       
  }
  setCar(car:Car){
    this.setCurrentCar=car
  }
  getCar(){
    return this.setCurrentCar;
  }
  
}

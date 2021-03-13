import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44392/api/cars/getall"
  constructor(private httpClient:HttpClient) { }
  
  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl)
      
  
  }
}

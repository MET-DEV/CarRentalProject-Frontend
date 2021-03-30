import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarPageService } from 'src/app/services/car-page.service';


import { CarService } from 'src/app/services/car.service';
import { CarPageComponent } from '../car-page/car-page.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  cars:Car[]=[];
  filterText="";
  

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,private pageService:CarPageService) { }
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      }else if(params['colorId']){
        this.getCarsByColor(params['colorId']);
      }
       else {
        this.getCars();
      }
    })
  }
  getCars(){
    this.carService.getCars().subscribe(response=>this.cars=response.data);
    
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>this.cars=response.data);
    
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByBrand(colorId).subscribe(response=>this.cars=response.data);
    
  }
  settCar(car:Car){
    this.pageService.setCar(car)
  }
  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarPageService } from 'src/app/services/car-page.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {
  currentCar:Car
  constructor(private activatedRoute:ActivatedRoute,private carPage:CarPageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
      this.carPage.getCarById(params["id"]).subscribe(response=>
      this.currentCar=response.data)
      
    })

  }
  

}

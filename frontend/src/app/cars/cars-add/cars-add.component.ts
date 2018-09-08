import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CarService} from "./../car.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit {
    carData = {id:'', name:''}
   message = ''
    constructor(
        private spinnerService: Ng4LoadingSpinnerService,
        private carService: CarService, 
        private router: Router,
        private notificationService: NotificationService
    ) { }

  ngOnInit() {
  }

    addBook() {
      this.spinnerService.show();
      let fd = new FormData();
      for(let key in this.carData){
          fd.append(key, this.carData[key])
      }
      
      this.carService.addCars(fd)
      .subscribe((value) => {
        this.spinnerService.hide();
        this.notificationService.onSuccess('Successfully Added.')
        this.router.navigateByUrl('car');   
      });
    }
}

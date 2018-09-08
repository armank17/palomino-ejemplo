import { Component,ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';
import { CarService } from "./../car.service";


@Component({
  selector: 'app-cars-index',
  templateUrl: './cars-index.component.html',
  styleUrls: ['./cars-index.component.css']
})
export class CarsIndexComponent implements OnInit {
    @ViewChild('BookImageModal') BookImageModal: ModalDirective;
    p: number = 1;
    cars = [];
    errMesg: any;
    totalRecords = 0;
    pageSize = 5;
    bookImage = '';

    constructor(
        private spinnerService: Ng4LoadingSpinnerService, 
        private carService: CarService,
        private notificationService: NotificationService
    ) { }

  ngOnInit() {
    this.getCar();
  }


    getCar(){
        this.spinnerService.show();
        this.carService.getCars(1)
        .subscribe((response) => {
            this.cars = response.data.data
            this.totalRecords = response.data.total
            this.spinnerService.hide();
        });
    }

  getPage($page)
  {
    this.spinnerService.show();
    this.carService.getCars($page)
      .subscribe((response) => {
        this.cars = response.data.data
        this.totalRecords =response.data.total
        this.p = $page
        this.spinnerService.hide();
      });
  }
}

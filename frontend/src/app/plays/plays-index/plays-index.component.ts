import { Component, OnInit } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from './../../shared';
import { PlayService } from "./../play.service";



@Component({
  selector: 'app-plays-index',
  templateUrl: './plays-index.component.html',
  styleUrls: ['./plays-index.component.css']
})
export class PlaysIndexComponent implements OnInit {
    p: number = 1;
    plays = [];
    errMesg: any;
    totalRecords = 0;
    pageSize = 5;

    constructor(
        private spinnerService: Ng4LoadingSpinnerService, 
        private playService: PlayService,
        private notificationService: NotificationService
    ) { }

  ngOnInit() {
    this.getPlay();
  }

    getPlay(){
        this.spinnerService.show();
        this.playService.getPlays(1)
          .subscribe((response) => {
            this.plays = response.data.data
            this.totalRecords = response.data.total
            this.spinnerService.hide();
          });
    }

    getPage($page)
    {
    this.spinnerService.show();
    this.carService.getCars($page)
      .subscribe((response) => {
        this.plays = response.data.data
        this.totalRecords =response.data.total
        this.p = $page
        this.spinnerService.hide();
      });
    }

}

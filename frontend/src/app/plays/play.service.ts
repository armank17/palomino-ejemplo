import { Injectable } from '@angular/core';
// import { Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import { EnvironmentService } from "./../shared/environment/environment.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class PlayService {

    constructor(
        private _http: HttpClient,
        private environmentService: EnvironmentService
    ) { }

    getPlays(page){
        let url = this.environmentService.setApiServiceWithPage('play', page)
        return this._http.get(url)
            .map(res=> res)
            .catch(this.handleError)
      }

    private handleError (error: HttpErrorResponse | any) {
        let errMsg: string;
        errMsg = error.error
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
  
})

export class ApiService {

  private solarsURL = "http://localhost:5050/api/solars/";  // URL to web api

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<any>(this.solarsURL)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getChargers(){
    return  this.http.get(this.solarsURL+`?category=chargers`)
  }
  getPanels(){
    return  this.http.get(this.solarsURL+`?category=solar`)
  }

  
}

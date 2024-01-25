import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: HttpClient) { }

  loginUser(body:any){
    return this.api.post("http://127.0.0.1:5000/api/user/login", body)
   }


   CreateReport(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.api.post("http://127.0.0.1:5000/api/arrive/CreateArrive", body, httpOptions)
  }


}

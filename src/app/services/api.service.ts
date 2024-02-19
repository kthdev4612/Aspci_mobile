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


   CreatePresence(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.api.post("http://127.0.0.1:5000/api/presence/CreatePresence", body, httpOptions)
  }

  CreateReport2(body:any){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    };
    return this.api.post("http://127.0.0.1:5000/api/report/CreateReport", body, httpOptions)
  }

  getAllReport(){

    return this.api.get("http://127.0.0.1:5000/api/report/GetAllReport")
  }

}

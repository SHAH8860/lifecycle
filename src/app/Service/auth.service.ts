import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  url="https://api.slingacademy.com/v1/sample-data/photos"
  getdata(){
    return this.http.get(this.url)
  }
}

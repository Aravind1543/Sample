import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint:string="";
  constructor(private http:HttpClient) { }
  async getDataUsingAsync():Promise<any>{
    const data= await this.http.get<any>(this.endpoint).toPromise();
    return data;
  }
  getData():Observable<any>{
    return this.http.get<any>(this.endpoint)
  }
}

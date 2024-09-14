import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  [x: string]: any;
  private baseUrl ='http://localhost:8080/api/classes';

  constructor(private http: HttpClient) { }

  getClasses(){
    return this.http.get(`${this.baseUrl}`);
  }

  createClass(newClass: any){
    return this.http.post(`${this.baseUrl}`,newClass);
  }
}

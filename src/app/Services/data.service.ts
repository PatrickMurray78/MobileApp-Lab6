import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}

  GetStudentData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/c08e6c53-5d69-11ea-80ec-139c4cabfd05');
  }

  GetWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=cb18eb8fd0c597e9a6da06339d744728')
  }
}

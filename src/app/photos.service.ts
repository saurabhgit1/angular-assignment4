import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  baseApiUrl = "https://jsonplaceholder.typicode.com/photos";
  imageurl = [];


  constructor(private http: HttpClient) { }

  getPhotos():Observable<Photos>{
   return this.http.get<Photos>("https://jsonplaceholder.typicode.com/photos");
  }

  upload(data):Observable<any>{
    const formData = new FormData(); 
        
      // Store form name as "file" with file data
      // formData.append("file", file, file.name);
        
      // Make http post request over api
      // with formData as req
      return this.http.post(this.baseApiUrl, data);
  }
}

import { Injectable } from '@angular/core';
import { baseURL } from '../shared/Config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../shared/Image';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  constructor(
    private http: HttpClient
  ) { }

    public getImageList(): Observable<Image[]>{
      return this.http.get<Image[]>(baseURL + "/images");
    }

    public postImage(theImage: File ): Observable<any>{
      const formData = new FormData();
      formData.append("theMultipartFile", theImage);
      return this.http.post<any>(baseURL + "/images", formData);
    }

    public deleteImage(id: String): Observable<any>{
      return this.http.delete<any>(baseURL + "/images/" + id);
    }

}

import { Injectable } from '@angular/core';
import { baseURL } from '../shared/Config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../shared/Image';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  constructor(
    private http: HttpClient
  ) { }
}

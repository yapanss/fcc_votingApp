import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }

  getIpAddress() {
    return this.http.get('https://api.ipstack.com/check?access_key=24286a78fc4102db27b06091a91de0c4')
  }
}

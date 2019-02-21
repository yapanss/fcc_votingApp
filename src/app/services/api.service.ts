import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postForm(collection, data) {
    let url = 'http://localhost:3000/api/'+collection
    let body = JSON.stringify(data)
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  getAllList(collection) {
    let url = 'http://localhost:3000/api/'+collection
    return this.http.get(url)
  }

  getSomeList(collection, parame) {
    let url = 'http://localhost:3000/api/'+collection+'/'+parame
    return this.http.get(url)
  }

  getItem(collection, id) {
    let url = 'http://localhost:3000/api/'+collection+'/'+id
    return this.http.get(url)
  }

   updateItem(collection, id, data) {
    let url = 'http://localhost:3000/api/'+collection+'/'+id
    let body = JSON.stringify(data)

    return this.http.put(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }

   deleteItem(collection, id) {
    let url = 'http://localhost:3000/api/'+collection+'/'+id
    return this.http.delete(url)
  }


  updateVote(id1, index, data) {
    let url = 'http://localhost:3000/api/poll/'+id1+'/'+index
    let body = JSON.stringify(data)
    return this.http.put(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }

  shareOnTwitter(text) {
    let url = 'https://twitter.com/intent/tweet?text='+text;
    return this.http.post(url, {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      })
    })
  }
}

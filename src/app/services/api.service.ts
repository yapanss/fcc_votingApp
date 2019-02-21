import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  const baseUrl = "/api/"

  constructor(private http: HttpClient) { }

  postForm(collection, data) {
    let url = baseUrl+collection
    let body = JSON.stringify(data)
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  getAllList(collection) {
    let url = baseUrl+collection
    return this.http.get(url)
  }

  getSomeList(collection, parame) {
    let url = baseUrl+collection+'/'+parame
    return this.http.get(url)
  }

  getItem(collection, id) {
    let url = baseUrl+collection+'/'+id
    return this.http.get(url)
  }

   updateItem(collection, id, data) {
    let url = baseUrl+collection+'/'+id
    let body = JSON.stringify(data)

    return this.http.put(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }

   deleteItem(collection, id) {
    let url = baseUrl+collection+'/'+id
    return this.http.delete(url)
  }


  updateVote(id1, index, data) {
    let url = baseUrl+'poll/'+id1+'/'+index
    let body = JSON.stringify(data)
    return this.http.put(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }

}

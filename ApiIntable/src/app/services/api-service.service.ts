import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.modal';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  sendUrl= new BehaviorSubject('');
  sendData= new BehaviorSubject('');


   private url='https://uxproducts-41081-default-rtdb.firebaseio.com/user.json';

  constructor(private http:HttpClient) { }
  postData(data:User):Observable<User>{
    return this.http.post<User>(this.url,data);
  }
  getData():Observable<User>{
    return this.http.get<any>(this.url);
  }
  delData(userid:string):Observable<User>{
    const delUrl= `https://uxproducts-41081-default-rtdb.firebaseio.com/user/${userid}.json`;
    return this.http.delete<User>(delUrl,)
  }
  upData(data:User,userid:string):Observable<User>{
    const delUrl= `https://uxproducts-41081-default-rtdb.firebaseio.com/user/${userid}.json`;
    return this.http.put<User>(delUrl,data)
  }
}

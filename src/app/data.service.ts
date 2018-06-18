import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
	constructor(private http: HttpClient){}
	getData(){
		var arr=[];
		arr=this.http.get('https://cors-anywhere.herokuapp.com/remoteok.io/api');
		
		return arr;
		
	}

}

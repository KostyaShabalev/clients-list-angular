import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

	private _url: string = "../assets/data/clients.json";

  constructor(private _http: HttpClient) { }

  getClients() {

  	return this._http.get(this._url)
  		.pipe(
  				map((result: any) => result)
  			);

  }


}

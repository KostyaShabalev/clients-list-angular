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
    // Method fetches out data from the clients.json file

  	return this._http.get(this._url)
  		.pipe(
  			map((result: any) => result)
  			);

  }

  findMatches(clients, string) {
    // Method returns an array with clients which string-fields contain input string

  	if (!string) return clients;

  	const lowerString = string.toLowerCase();

  	return clients.filter(client => {

  			const allClientFields = [];

        // Filling allClientFields with string values
  			Object.values(client).forEach(item => {
  				allClientFields.splice(allClientFields.length, 0, ...Object.values(item));
  				});

        // Finding matches in allClientFields
  			const matches = allClientFields.filter(field => {
  					if (field.toLowerCase().indexOf('http') === -1)
  						return field.toLowerCase().indexOf(string) !== -1;
  				});

  			return (matches.length);

  		});

  }

}

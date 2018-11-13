import { Component, OnInit } from '@angular/core';

import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-main',
  templateUrl: './clients-main.component.html',
  styleUrls: ['./clients-main.component.css']
})
export class ClientsMainComponent implements OnInit {

	public clients;
	public clientsToList;
  public clientDetails;
  public areDetailsVisible = false;

  constructor(private _clientsService: ClientsService) { }

  ngOnInit() {

    // Getting clients
  	this._clientsService.getClients()
  		.subscribe(items => {
  				this.clients = this.clientsToList = items;
  			});

  }

  showClientDetails(client) {
    // Method assigns client to show and makes details visible

    this.areDetailsVisible = true;
    this.clientDetails = client;
  }

  findClients(string) {
    // Method conducts autocomplete

    this.clientsToList = this._clientsService.findMatches(this.clients, string);
  }


}

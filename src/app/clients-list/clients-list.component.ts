import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

	@Input() public clientsToShow;

	@Output() public clientDetailed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  throwClientDetails(client) {
    // Method throws client to the main component

  	this.clientDetailed.emit(client);
  }

}

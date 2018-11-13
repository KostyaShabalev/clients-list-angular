import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

	@Input() public details;

  constructor() { }

  ngOnInit() {
  }

}

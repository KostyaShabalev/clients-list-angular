import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

	@Output() public stringToFind = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  throwString(event) {
  	this.stringToFind.emit(event.target.value);
  }

}

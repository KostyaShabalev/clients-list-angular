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
    // Method throws current input value to the main component

  	this.stringToFind.emit(event.target.value);
  }

}

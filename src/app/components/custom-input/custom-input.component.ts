import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() type:string;
  @Input() control:string;
  @Input() icon:string;
  @Input() fieldLabel:string;

  constructor() { }

  ngOnInit() {
  }

}

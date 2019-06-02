import { Component, Inject, OnInit } from '@angular/core';
import { dataToken } from '../token.constant';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent implements OnInit {

  constructor(@Inject(dataToken) public data: { text: string }) { }

  ngOnInit() {
  }

  showAlert() {
    alert(this.data && this.data.text);
  }

}

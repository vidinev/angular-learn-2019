import { Component, Inject, OnInit } from '@angular/core';
import { dataToken } from '../token.constant';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  constructor(@Inject(dataToken) public data: { text: string }) { }

  ngOnInit() {
  }

}

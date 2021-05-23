import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public active: number;
  constructor() {}

  ngOnInit(): void {
    this.active = 1;
  }
}

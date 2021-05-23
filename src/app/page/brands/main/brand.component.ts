import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  public active: number;
  constructor() {}

  ngOnInit(): void {
    this.active = 1;
  }
}

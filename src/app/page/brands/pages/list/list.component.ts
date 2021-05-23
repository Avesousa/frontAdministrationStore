import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/models/category';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';

const IMAGE = 'brands/image/';
const global = environment;

@Component({
  selector: 'brand-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListBrandComponent implements OnInit {
  public files: Array<File>;
  public brands: Brand[];
  public url: string;
  public urlImage: string;

  constructor(private _brandService: BrandService) {
    this.url = global.server;
    this.urlImage = this.url + IMAGE;
  }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this._brandService.getList().subscribe(
      (res) => {
        this.brands = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  compareCategory(select: Category, option: Category) {
    try {
      return select._id === option._id;
    } catch (error) { return false; }
  }

  updateBrand(brand: Brand) {
    this._brandService.update(brand).subscribe(
      () => {
        this.getBrands();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  setFiles(e: any, brand: Brand) {
    this.files = e.target.files;
    this._brandService.saveFile(brand._id, this.files, 'image').then(() => {
      this.getBrands();
    }).catch((error) => {
      console.log(error);
    })
  }

}

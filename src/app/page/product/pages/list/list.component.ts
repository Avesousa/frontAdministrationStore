import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

const IMAGE = 'productos/image/';
const global = environment;

@Component({
  selector: 'producto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListProductComponent implements OnInit {
  public title: string;
  public files: Array<File>;
  public products: Array<Product>;
  public categorys: Category[];
  public url: string;
  public urlImage: string;
  constructor(
    private _productService: ProductService,
    private _categoryService: CategoryService
  ) {
    this.title = 'Productos';
    this.url = global.server;
    this.urlImage = this.url + IMAGE;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getList().subscribe(
      (res) => {
        this.products = res.data;
        this._categoryService.getList().subscribe(
          (resCategory) => {
            this.categorys = resCategory.data;
            console.log("+ List product add");
          },
          (errorCategory) => {
            console.log(errorCategory);
          });
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

  updateProduct(product: Product) {
    console.log(product);
    this._productService.update(product).subscribe(
      () => {
        this.getProducts();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  setFiles(e: any, product: Product) {
    this.files = e.target.files;
    this._productService.saveFile(product._id, this.files, 'image').then(() => {
      this.getProducts();
    }).catch((error) => {
      console.log(error);
    })
  }

  addOrSubtract(action: string, product: Product) {
    console.log(product);
    action == 'add' ? product.quantity++ : product.quantity--;
  }

}

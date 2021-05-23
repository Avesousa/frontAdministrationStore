import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { Category } from '../../../../models/category';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'producto-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateProductComponent implements OnInit {
  public title: string;
  public product: Product;
  public categories: Array<Category>
  public files: Array<File>;

  constructor(
    private _productService: ProductService,
    private _categoryService: CategoryService
  ) {
    this.title = 'Crear producto';
    this.product = new Product();
    this.product.quantity = 0;
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._categoryService.getList().subscribe(
      (res) => {
        this.categories = res.data;
        this.product.setCategory(this.categories[0]);
      },
      (error) => {
        console.log("Ha ocurrido un error al intentar traer las categorias");
        console.log(error);
        alert("Ha ocurrido un error con las categorias");
      }
    );
  }

  enviar(form) {
    this._productService.save(this.product).subscribe(
      (response) => {
        this._productService
          .saveFile(response.data._id, this.files, 'image')
          .then((res) => {
            alert('Se ha creado un nuevo producto');
          })
          .catch((err) => {
            console.log(err);
          });
        form.reset();
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  setFiles(e: any) {
    this.files = e.target.files;
  }

  addOrSubtract(action: string) {
    action == 'add' ? this.product.quantity++ : this.product.quantity--;
  }

}

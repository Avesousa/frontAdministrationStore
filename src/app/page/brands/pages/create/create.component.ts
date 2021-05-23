import { Component } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'brand-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateBrandComponent {
  public brand: Brand;
  public files: Array<File>;

  constructor(private _brandService: BrandService) {
    this.brand = new Brand();
  }

  enviar(form) {
    this._brandService.save(this.brand).subscribe(
      (response) => {
        this._brandService
          .saveFile(response.data._id, this.files, 'image')
          .then((res) => {
            alert('Se ha creado una nueva marca asociada');
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

}

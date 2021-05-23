import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { ImageService } from './image.service';
import { environment } from '../../environments/environment'

const global = environment;
const SAVE: string = 'save';
const UPDATE: string = 'update/';
const PRODUCT: string = 'get/';
const LIST: string = 'list';
const SAVEIMAGE: string = 'save/image/';
@Injectable()
export class ProductService {
  public url: string;

  constructor(private _http: HttpClient, private fileService: ImageService) {
    this.url = global.server + "productos/";
  }

  private header = new HttpHeaders({ 'content-Type': 'application/json', 'store': '70' });

  save(product: Product): Observable<any> {
    return this._http.post(
      this.url + SAVE,
      product);
  }

  saveFile(id: string, files: Array<File>, name: string) {
    let link = this.url + SAVEIMAGE + id;
    console.log(link);
    return this.fileService.saveFile(files, name, link);
  }
  
  update(product: Product) {
    let link = this.url + UPDATE + product._id;
    console.log(link);
    return this._http.put(link, product);
  }
  
  getList(): Observable<any> {
    console.log(this.url + LIST);
    return this._http.get(this.url + LIST, { headers: this.header });
  }
}

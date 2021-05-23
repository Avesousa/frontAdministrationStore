import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ImageService } from './image.service';
import { environment } from '../../environments/environment'
import { Brand } from '../models/brand';

const global = environment;
const SAVE: string = 'save';
const UPDATE: string = 'update/';
const LIST: string = 'list';
const SAVEIMAGE: string = 'save/image/';
@Injectable()
export class BrandService {
  public url: string;

  constructor(private _http: HttpClient, private fileService: ImageService) {
    this.url = global.server + "brands/";
  }

  private header = new HttpHeaders({ 'content-Type': 'application/json', 'store': '70' });

  save(brand: Brand): Observable<any> {
    return this._http.post(this.url + SAVE, brand);
  }

  saveFile(id: string, files: Array<File>, name: string) {
    return this.fileService.saveFile(files, name, this.url + SAVEIMAGE + id);
  }

  update(brand: Brand) {
    return this._http.put(this.url + UPDATE + brand._id, brand);
  }

  getList(): Observable<any> {
    return this._http.get(this.url + LIST, { headers: this.header });
  }
}

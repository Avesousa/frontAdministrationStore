import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Header } from '../models/header';
import { ImageService } from './image.service';
import { Category } from '../models/category';
import { environment } from 'src/environments/environment';

const global = environment;

const SAVE: string = 'save';
const UPDATE: string = 'update/';
const CATEGORY: string = 'get/';
const LIST: string = 'list';
const SAVEIMAGE: string = 'save/image/';
const SAVEICON: string = 'save/icon/';
@Injectable()
export class CategoryService {
  public url: string;

  constructor(private _http: HttpClient, private fileService: ImageService) {
    this.url = global.server + "categorias/";
  }

  save(category: Category): Observable<any> {
    return this._http.post(
      this.url + SAVE,
      JSON.stringify(category)
    );
  }

  get(id:string): Observable<any>{
    return this._http.get(
      this.url + CATEGORY + id
    )
  }

  saveFile(id: string, files: Array<File>, name: string){
    let link = this.url + SAVEIMAGE + id;
    return this.fileService.saveFile(files,name,link);
  }

  getList(): Observable<any> {
    return this._http.get(this.url + LIST);
  }


}

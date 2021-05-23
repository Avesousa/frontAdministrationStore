import { HttpHeaders } from '@angular/common/http';

export class Header {
  private contentType: string = 'application/json';
  constructor() {}

  get(): Object {
    let header = new HttpHeaders();
    header.append('Content-Type', this.contentType);
    header.append('Authorization', localStorage.getItem('TOKEN'));
    return { headers: header };
  }

  setContentType(type): void {
    this.contentType = type;
  }
}

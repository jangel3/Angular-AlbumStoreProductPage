import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl = "../assets/album.json";
  private response: Response;

  constructor(private _http: Http) {

  }

  getAlbum(id: number)
  {

    return this._http.get(this._albumUrl).map(this.response.json());
  }
}

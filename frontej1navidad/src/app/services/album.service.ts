import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private httpHeaders:HttpHeaders = new HttpHeaders({'Content-type': 'Application/json'})
  url:string = "http://localhost:8080/api/album/"

  constructor(private http:HttpClient) { }

  //guardar album
  guardarAlbum(album:Album) : Observable<Album>{
    return this.http.post<Album>(this.url + "save", album, {headers: this.httpHeaders})
  }

  //listar album
  listarAlbum() : Observable<Album>{
    return this.http.get<Album>(this.url + "list")
  }
}

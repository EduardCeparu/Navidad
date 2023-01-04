import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../model/Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private httpHeaders:HttpHeaders = new HttpHeaders({'Content-Type': 'Application/json'})
  URL:string = "http://localhost:8080/api/grupo/"

  constructor(private http:HttpClient) { }

  //guardar grupo
  guardarGrupo(grupo:Grupo) : Observable<Grupo>{
    return this.http.post<Grupo>(this.URL + 'save', grupo, {headers:this.httpHeaders})
  }

  //listar grupos
  listarGrupos() :Observable<Grupo>{
    return this.http.get<Grupo>(this.URL + "list")
  }

  //buscar grupo
  buscarGrupo(nombre:String) : Observable<any>{
    return this.http.get<any>(this.URL + "buscar/" +nombre)
  }
}

import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import {Album} from 'src/app/model/Album'
import Swal from 'sweetalert2';
import { GrupoService } from 'src/app/services/grupo.service';
import { Grupo } from 'src/app/model/Grupo';
@Component({
  selector: 'app-albumform',
  templateUrl: './albumform.component.html',
  styleUrls: ['./albumform.component.css']
})
export class AlbumformComponent implements OnInit {

grupos:any = []
// nombreAlbum:string = ""
album:Album = new Album()
  constructor(private albumService:AlbumService, private grupoService:GrupoService){}

  listarGrupos(){
    this.grupoService.listarGrupos().subscribe(
      res=>{
        this.grupos = res
      }
    )
  }
  save(){
    this.albumService.guardarAlbum(this.album).subscribe(
      res =>{
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Album registrado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }
  ngOnInit(): void {
      this.listarGrupos()
  }
}

import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  nombreGrupo:String = "";
  grupos:any = []
  constructor(private grupoService:GrupoService){}

  buscar(){
    this.grupoService.buscarGrupo(this.nombreGrupo).subscribe(
      res=>{
        // console.log(res)
       this.grupos = res
      }
    )
  }

  ngOnInit(): void {
      
  }
}

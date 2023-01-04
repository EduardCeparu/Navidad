import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit{

  grupos:any = []

  constructor(private grupoService:GrupoService){}

  list(){
    this.grupoService.listarGrupos().subscribe(
      res=>{
        console.log(res)
        this.grupos = res
      }
    )
  }
  ngOnInit(): void {
      this.list()
  }
}

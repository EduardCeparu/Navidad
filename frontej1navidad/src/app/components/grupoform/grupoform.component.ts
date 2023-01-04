import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grupo } from 'src/app/model/Grupo';
import { GrupoService } from 'src/app/services/grupo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grupoform',
  templateUrl: './grupoform.component.html',
  styleUrls: ['./grupoform.component.css']
})
export class GrupoformComponent implements OnInit {

  nombreGrupo:string = ''

  grupo:Grupo = new Grupo();

  constructor(private grupoService:GrupoService, private router:Router) {  }

  save(){
    this.grupo.nombreGrupo = this.nombreGrupo

    this.grupoService.guardarGrupo(this.grupo).subscribe(
      res =>{
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Grupo registrado',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/grupos'])
      }
    )
  }
  ngOnInit(): void {
      
  }
}

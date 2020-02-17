import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from "./Model/usuario";
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.reloadUsuarios();
  }

  reloadUsuarios(){
    this.usuarios = this.usuarioService.getUsuariosList();
  }

  deleteUsuarios(id: number){
    this.usuarioService.deleteUsuario(id).subscribe(
      data => {
        console.log(data);
        this.reloadUsuarios;
      },
      error => console.log(error)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loja-perfil',
  templateUrl: './loja-perfil.page.html',
  styleUrls: ['./loja-perfil.page.scss'],
})
export class LojaPerfilPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

cadastroDeProduto(){
  this.router.navigate(['/cadastro-de-'])
}
}

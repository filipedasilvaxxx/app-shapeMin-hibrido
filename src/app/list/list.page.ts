import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})
export class ListPage {

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public router : Router,
              public navctrl : NavController,
              public fire : AngularFireAuth){
  }

  logar(){
    this.fire.auth.signInWithEmailAndPassword(this.email.value,this.senha.value)
      .then(()=>{
        console.log('Logado com sucesso');
        this.router.navigate(['/home']);
      })
      .catch(()=>{
        console.log('Login Inválido');
      })
  }

  cadastrar(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.senha.value)
    .then(()=> {
      console.log("Cadastrado com sucesso!");
    }).catch(()=>{
      console.log("Usuário inválido");
    })
  }



}
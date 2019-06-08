import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Loja } from '../model/loja';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage implements OnInit {
  
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  
  loja: Loja = new Loja();
  email : string;
  nome : string;
  listaPerfil : Loja[] = []; 

    constructor(public router : Router,
                private menu: MenuController,
                private firebaseauth : AngularFireAuth,
                public activatedRoute: ActivatedRoute, ){
      this.email = this.activatedRoute.snapshot.paramMap.get('loja');
      
    }

  ngOnInit() {
      this.obterCliente();
    }

    
    obterCliente() {
      console.log(this.nome)
      var ref = firebase.firestore().collection("loja").doc(this.email);
      ref.get().then(doc => {
      this.loja.setDados(doc.data());
        
      }).catch((error) => {
        console.log("Error getting document:", error);
      
  
      });
    }

  cadastrarLoja(){
  this.router.navigate(['/cadastro-de-loja']);
  }
  
  logar(){
    this.router.navigate(['/list']);
    }
  logoff(){
      this.router.navigate(['/logoff']);
      }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  
  
}

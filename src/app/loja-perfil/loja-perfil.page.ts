import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { Produto } from '../model/produto';
import { FormGroup } from '@angular/forms';
import { Loja } from '../model/loja';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loja-perfil',
  templateUrl: './loja-perfil.page.html',
  styleUrls: ['./loja-perfil.page.scss'],
})
export class LojaPerfilPage implements OnInit {

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  formGroup: FormGroup;
  loja : Loja = new Loja();
  email: string;
  

  listaLoja = [];
  imagem : string = "";

  constructor(public activatedRoute: ActivatedRoute,
              public router : Router,
              public loadingController: LoadingController) {
    this.email = this.activatedRoute.snapshot.paramMap.get('loja');
    
  }

  ngOnInit() {
   
  }

  obterCliente() {

    var ref = firebase.firestore().collection("loja").doc(this.email);
    ref.get().then(doc => {
      let c = new Loja();
      c.setDados(doc.data());
      
      
      this.listaLoja.push(c);
      console.log(c.nome)   
    }).catch(function (error) {
      console.log("Error getting document:", error);
    

    });
  }

  ionViewDidLoad(){
    this.downloadFoto();
  }

  cadastroDeProduto(){
    this.router.navigate(['/cadastro-de-'])
  }
  
  enviaArquivo(event){
    let imagem = event.srcElement.files[0];
    //console.log(imagem.name);
    let ref = firebase.storage().ref()
                  .child(`lojas/${this.loja.id}.jpg`);
    
    ref.put(imagem).then(url=>{
      console.log("Enviado com sucesso!");
      this.downloadFoto();
    })

  }

  downloadFoto(){
    let ref = firebase.storage().ref()
      .child(`lojas/${this.loja.id}.jpg`);

      ref.getDownloadURL().then( url=>{ 
        this.imagem = url;
      })
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }

}

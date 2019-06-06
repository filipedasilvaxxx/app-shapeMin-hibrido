import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cadastro-de-loja',
  templateUrl: './cadastro-de-loja.page.html',
  styleUrls: ['./cadastro-de-loja.page.scss'],
})
export class CadastroDeLojaPage implements OnInit {

  formGroup : FormGroup;


  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  constructor(public formBuilder: FormBuilder,
              public router: Router,
              public loadingController: LoadingController,
              public toastController: ToastController) {
    
    this.formGroup = this.formBuilder.group({
      nome : [''],
      telefone : [''],
      email : [''],
      cnpj : [''],
      endereco : [''],
    })
   }

  ngOnInit() {
  }

  cadastrar(){
    this.loading();

    let ref = this.firestore.collection('loja')
    ref.add(this.formGroup.value)
      .then(() =>{
        console.log('Cadastrado com sucesso');
        this.router.navigate(['/loja-perfil']);
        this.loadingController.dismiss();
        this.toast('Cadastrado com sucesso');
      }).catch(err=>{
        console.log(err);
        console.log("erro");

        this.loadingController.dismiss();
        this.toast('Erro ao cadastrar');
      })      
  }
  

 
  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }

  async toast(msg : string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();

  }
}

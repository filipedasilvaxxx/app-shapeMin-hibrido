import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bcaa-list',
  templateUrl: './bcaa-list.page.html',
  styleUrls: ['./bcaa-list.page.scss'],
})
export class BcaaListPage implements OnInit {

  listaProduto : Produto[] = [];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  categoria : string;

  constructor(public router : Router,
              public loadingController: LoadingController,
              public toastController: ToastController){
    
  }
  ngOnInit() {
  this.getList();
  }

  getList() {
    this.loading();

    var ref = firebase.firestore().collection("produto");
    ref.get().then(query => {
        query.forEach(doc => {
            let c = new Produto();
            c.setDados(doc.data());
            c.id = doc.id;
            this.listaProduto.push(c);
        });
       
        this.loadingController.dismiss();
    });

  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }
}

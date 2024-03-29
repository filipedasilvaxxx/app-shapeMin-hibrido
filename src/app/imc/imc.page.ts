import { Component, OnInit } from '@angular/core';

import { CalculosDirective } from '../../directives/calculos/calculos';
import { NavController } from '@ionic/angular';
//import { DirectivesModule } from '../../directives/directives.module';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  condicao: string = "";

  constructor( public navCtrl: NavController ) { }

  calcular(){
    this.imc = CalculosDirective.calcularImc( this.altura, this.peso, );
    this.condicao = CalculosDirective.informarImc(this.imc);
  }


}

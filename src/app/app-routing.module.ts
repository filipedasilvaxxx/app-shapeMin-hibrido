import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'cadastro-de-loja', 
  loadChildren: './cadastro-de-loja/cadastro-de-loja.module#CadastroDeLojaPageModule' },
  
  { path: 'cadastro-de-produto', 
  loadChildren: './cadastro-de-produto/cadastro-de-produto.module#CadastroDeProdutoPageModule' },
  
  { path: 'loja-perfil', 
  loadChildren: './loja-perfil/loja-perfil.module#LojaPerfilPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

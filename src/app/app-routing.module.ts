import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './servico/auth.Guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
     

  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  
  { path: 'cadastro-de-loja', 
  loadChildren: './cadastro-de-loja/cadastro-de-loja.module#CadastroDeLojaPageModule',
  canActivate: [AuthGuard] 
  },
  
  { path: 'cadastro-de-produto', 
  loadChildren: './cadastro-de-produto/cadastro-de-produto.module#CadastroDeProdutoPageModule' },
  
  { path: 'loja-perfil', 
  loadChildren: './loja-perfil/loja-perfil.module#LojaPerfilPageModule' },
  
  { path: 'logoff', 
  loadChildren: './logoff/logoff.module#LogoffPageModule',
 }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './servico/auth.Guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  
  },
  
  { path: 'cadastro-de-produto', 
  loadChildren: './cadastro-de-produto/cadastro-de-produto.module#CadastroDeProdutoPageModule' },
  
  { path: 'loja-perfil', 
  loadChildren: './loja-perfil/loja-perfil.module#LojaPerfilPageModule' },
  
  { path: 'logoff', 
  loadChildren: './logoff/logoff.module#LogoffPageModule',
  canActivate: [AuthGuard]
 },  { path: 'home-cliente', loadChildren: './home-cliente/home-cliente.module#HomeClientePageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

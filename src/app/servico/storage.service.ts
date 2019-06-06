import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';

@Injectable()
export class StorageService{
    
    constructor(private storage: Storage){
    }
        
    setCart(obj : Pedido){
        this.storage.set('carrinho', obj);
    }
    
    getCart() : Pedido{
        
        let p = new Pedido();
        this.storage.get('carrinho').then((val) => {
            p = val;
        });

        return p;
    }
}
    

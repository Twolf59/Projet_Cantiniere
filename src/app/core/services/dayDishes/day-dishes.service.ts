import { Injectable } from '@angular/core';
import {AlertService} from "../alert/alert.service";
import {Cart} from "../../models/cart/cart";

@Injectable({
  providedIn: 'root'
})
export class DayDishesService {

  cart: Cart[] = [];

  constructor(private alert: AlertService) { }

  addCart(cart: Cart): void {

    if (!this.cart.some(item => item.jour === cart.jour)) {
      this.cart.push(cart);
      sessionStorage.setItem('cart', JSON.stringify(this.cart))
      this.alert.onInfo('plat ajouter');
    } else {
      this.UpdateCart(cart)
    }

  }

  remove(cart: Cart): void{

    this.cart.forEach(item => {
      if (item === cart){
        this.alert.onInfo('plat supprimer');

        this.cart.splice(this.cart.indexOf(cart),1)

        sessionStorage.setItem('cart', JSON.stringify(this.cart))
      }
    });

  }

  UpdateCart(cart: Cart) {
    this.cart.forEach(item => {
      if (item.jour === cart.jour){
        if (cart != item){
          item.plat = cart.plat;
          item.type = cart.type;
          item.qte = cart.qte;
          this.alert.onInfo('plat modifier');
          sessionStorage.setItem('cart', JSON.stringify(this.cart));
        }
      }
    });
  }
}

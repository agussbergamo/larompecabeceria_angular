import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Puzzle } from './puzzle-list/Puzzle';

@Injectable({
  providedIn: 'root'
})
export class PuzzleCartService {
  
  _cartList: Puzzle[] = [];
  cartList: BehaviorSubject<Puzzle[]> = new BehaviorSubject<Puzzle[]>([]);
  _total: number = 0;
  total: BehaviorSubject<number> = new BehaviorSubject<number>(this._total);
  

  addToCart(puzzle: Puzzle) {
    let item: Puzzle | undefined = this._cartList.find((p) => p.name == puzzle.name);
    if(!item){
      this._cartList.push({...puzzle});
    } else {
      item.quantity += puzzle.quantity;
    }
    console.log(this._cartList);
    this.getTotal();
    this.cartList.next(this._cartList);
  }

  getTotal(){
    this._total = 0; 
    this._cartList.forEach(puzzle => {
      this._total += (puzzle.price * puzzle.quantity)  
    });
    console.log(this._total);
    this.total.next(this._total);
  }

  constructor() { }
}

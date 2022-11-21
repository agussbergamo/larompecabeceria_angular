import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PuzzleCartService } from '../puzzle-cart.service';
import { Puzzle } from '../puzzle-list/Puzzle';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Puzzle[]>;
  total$: Observable<number>; 

  constructor(private cart: PuzzleCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this.total$ = cart.total.asObservable();
   }

  ngOnInit(): void {
  }

}

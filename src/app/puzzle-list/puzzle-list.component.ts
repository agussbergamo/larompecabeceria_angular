import { Component, OnInit } from '@angular/core';
import { PuzzleCartService } from '../puzzle-cart.service';
import { PuzzleDataService } from '../puzzle-data.service';
import { Puzzle } from './Puzzle';

@Component({
  selector: 'app-puzzle-list',
  templateUrl: './puzzle-list.component.html',
  styleUrls: ['./puzzle-list.component.scss']
})
export class PuzzleListComponent implements OnInit {

  puzzles: Puzzle [] = [];

  constructor(
    private cart: PuzzleCartService,
    private puzzleData: PuzzleDataService) {
   }

  ngOnInit(): void {
    this.puzzleData.getAll().subscribe(puzzles => this.puzzles = puzzles);
  }

  upQuantity(puzzle: Puzzle): void {
    if(puzzle.quantity < puzzle.stock)
    puzzle.quantity++;
  }

  downQuantity(puzzle: Puzzle): void {
    if(puzzle.quantity >0)
    puzzle.quantity--;
  }

  addToCart(puzzle: Puzzle): void{
    this.cart.addToCart(puzzle);
    puzzle.stock -= puzzle.quantity;
    puzzle.quantity = 0;
  }


}

import { Component, OnInit } from '@angular/core';
import { Puzzle } from './Puzzle';

@Component({
  selector: 'app-puzzle-list',
  templateUrl: './puzzle-list.component.html',
  styleUrls: ['./puzzle-list.component.scss']
})
export class PuzzleListComponent implements OnInit {

  puzzles: Puzzle [] = [{
    image: "assets/img/cataratas.jpg",
    name: "Cataratas del Iguazú", 
    pieces: 1000,
    price: 8000, 
    stock: 7,
    clearance: false, 
    quantity: 0,
  },
  {
    image: "assets/img/nueva-york.jpg",
    name: "Nueva York", 
    pieces: 3000,
    price: 15000,
    stock: 9,
    clearance: false, 
    quantity: 0,
  },
  {
    image: "assets/img/plaza-san-pedro.jpg",
    name: "Plaza San Pedro", 
    pieces: 1500,
    price: 4000,
    stock: 3,
    clearance: true, 
    quantity: 0,
  },
  {
    image: "assets/img/las-vegas.jpg",
    name: "Las Vegas", 
    pieces: 1500,
    price: 4000,
    stock: 8,
    clearance: true, 
    quantity: 0,
  },
  {
    image: "assets/img/londres.jpg",
    name: "Londres", 
    pieces: 2000,
    price: 11000,
    stock: 0,
    clearance: false, 
    quantity: 0,
  },
];

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(puzzle: Puzzle): void {
    if(puzzle.quantity < puzzle.stock)
    puzzle.quantity++;
  }

  downQuantity(puzzle: Puzzle): void {
    if(puzzle.quantity >0)
    puzzle.quantity--;
  }


}

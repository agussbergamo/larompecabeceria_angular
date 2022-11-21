import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Puzzle } from './puzzle-list/Puzzle';
import { PuzzlesComponent } from './puzzles/puzzles.component';

const URL = "https://60c7f8aeafc88600179f5e97.mockapi.io/apiTPE/puzzles";

@Injectable({
  providedIn: 'root'
})
export class PuzzleDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Puzzle[]>{
    return this.http.get<Puzzle[]>(URL)
    .pipe(
      tap((puzzles: Puzzle[]) => puzzles.forEach(puzzle => puzzle.quantity=0))
    );
  }
}

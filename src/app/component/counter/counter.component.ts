

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/shared/store/counter.actions';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  constructor(private store: Store<{ counter: {counter: number} }>) {
  }

  OnIncrement() {
    this.store.dispatch(increment());
  }
  OnDecrement() {
    this.store.dispatch(decrement());
  }
  OnReset() {
    this.store.dispatch(reset());
  }
  counterDisplay!: number;
  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.counterDisplay = data.counter;
    });
  }
}

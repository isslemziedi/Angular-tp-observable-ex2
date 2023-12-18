import { Component, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  compteurValue = 0;
  private onDestroy$ = new Subject<void>();

  start() {
    interval(1000)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.compteurValue++;
      });
  }

  stop() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
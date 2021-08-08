import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs/operators';
import { TestDataState } from 'src/app/redux/models/tests.state.model';
import { getTestStartTime } from 'src/app/redux/selectors/tests.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  url: string = '';
  constructor(private router: Router, private store: Store<TestDataState>) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.url = event.url.split('/')[1];
      });
  }
  startTime$ = this.store.select(getTestStartTime).pipe(take(1));
  ngOnInit(): void {}
}

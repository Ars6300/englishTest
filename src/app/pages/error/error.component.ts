import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PROFILE_PATH } from 'src/app/app-routing.constants';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProfile(){
    this.router.navigate([`/${PROFILE_PATH}`])
  }
}

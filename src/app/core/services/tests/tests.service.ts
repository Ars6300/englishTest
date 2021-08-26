import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PROFILE_PATH } from 'src/app/modules/profile/profile-routing.constants';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  constructor(
    private http: HttpClient,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  getTests(englishLevel: string) {
    return this.http.post(`${environment.api_URL}/api/test`, {
      englishLevel,
    });
  }

  completeTest() {
    return fetch(`${environment.api_URL}/api/test/completeUser`, {
      method: 'PUT',
      body: '',
      headers: {
        Authorization: `Bearer ${this.auth.token}`,
      },
    }).then(() => {
      this.router.navigate([PROFILE_PATH]);
    });
  }

  getLastTestTime() {
    return this.http.get(`${environment.api_URL}/api/test/lastTestTime`);
  }

  getAssignedTest() {
    return this.http.get(`${environment.api_URL}/api/test/assignedToUser`);
  }
}

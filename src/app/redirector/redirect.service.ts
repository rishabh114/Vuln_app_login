import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  redirectTo(url: string): Observable<void> {
    // No validation on URL, allowing arbitrary redirection
    return of(url).pipe(
      // Directly using the URL without validation
      map((redirectUrl: string) => {
        window.location.href = redirectUrl; // Vulnerable redirection
        return; // Implicitly returns `void`
      }),
      catchError(err => {
        console.error('Redirect failed', err);
        return EMPTY; // `EMPTY` emits no values and completes
      })
    );
  }
}

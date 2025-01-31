import { inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private _router = inject(Router)
  private _snackBar = inject(MatSnackBar)
  private _snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'right',
    vericalPosition: 'top'
  }
  constructor() { }
  handleError(err: any): Observable<never> {
    if (err) {

    }
    return throwError(() => err)
  }
}

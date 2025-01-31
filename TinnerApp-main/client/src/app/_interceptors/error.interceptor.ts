import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { catchError } from 'rxjs'
import { ErrorService } from ''

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorInterceptor = inject(ErrorService)
  return next(req).pipe(
    catchError(err => ErrorService.handleError(err))
  )
}

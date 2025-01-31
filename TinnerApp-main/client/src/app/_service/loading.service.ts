import { inject, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingRequestCount = 0

  private spinner = inject(NgxSpinnerService)
  constructor() { }
  loading() {
    this.loadingRequestCount++
    this.spinner.show(undefined, {
      type: "pacman",
      bdColor: 'rgb(112, 126, 255)',
      color: 'rgb(112, 84, 252)',
      fullScreen: false
    })
  }
  idle() {
    this.loadingRequestCount--
    if (this.loadingRequestCount <= 0) {
      this.loadingRequestCount = 0
      this.spinner.hide()
    }
  }
}

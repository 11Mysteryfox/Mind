import { Component, inject, Injectable } from '@angular/core'
import { AccountService } from '../../_service/account.service'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common'
import { TimeagoFormatter, TimeagoIntl } from 'ngx-timeago'
import { MatCardModule } from '@angular/material/card'
import { string as engString } from 'ngx-timeago/language-strings/en.js'

@Injectable()
class MyIntl extends TimeagoIntl { }

@Component({
  selector: 'app-photo',
  imports: [MatButtonModule, MatIconModule, MatCardModule, CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
  providers: [
    { provide: TimeagoIntl, useClass: TimeagoIntl },
    { provide: TimeagoFormatter, useClass: TimeagoFormatter },
    {provide: }
  ]
})
export class PhotoComponent {
  //intl = inject(TimeagoIntl)
  user = input.required<User>()

  constructor(intl: TimeagoIntl) {
    intl.strings = engString
  }

  private accountService = inject(AccountService)
  private dialog = inject

  async setAvatar(photo_id) {

  }
}

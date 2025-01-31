import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-upload-photo',
  imports: [CommonModule],
  templateUrl: './upload-photo.component.html',
  styleUrl: './upload-photo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadPhotoComponent {
  acceptedImageType = ['image/jpeg', 'image/png']

  OnSubmit() {
    this.dialogRef.close(this.imgFile)
  }
  async OnImgPiked(event: Event) {
    this.imgPreview.set(undefined)
    this.errMessage.set(undefined)
    this.imgFile = undefined
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      this.imgFile = input.files[0]
      const fileType = await fileTypeFromBlob()
    }

  }
}

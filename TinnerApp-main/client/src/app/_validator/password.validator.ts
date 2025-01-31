import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export const PasswordValidator = function (minLength: number, maxLength: number) {
    return function (control: AbstractControl): ValidationErrors | null {
        const password = control.value as string
        if (!password)
            return { required: true }
        else if (password.length < minLength)
            return { invalidminLength: true }
        else if (password.length > minLength)
            return { invalidmaxLength: true }
        else if (!/[a-z]/.test(password))
            return { invalidLowerCase: true }
        else if (!/[a-z]/.test(password))
            return { invalidUpperCase: true }
        else if (!/[0-9]/.test(password))
            return { invalidNumberic: true }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
            return { invalidSpecialChar: true }
        return null
    }
}

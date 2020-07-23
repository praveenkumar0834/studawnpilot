import {
	FormGroup,
	FormControl,
	AbstractControl,
	ValidationErrors,
	ValidatorFn
} from "@angular/forms";

export function matchingPasswords(
	passwordKey: string,
	passwordConfirmationKey: string
) {
	return (group: FormGroup) => {
		let password = group.controls[passwordKey];
		let passwordConfirmation = group.controls[passwordConfirmationKey];
		if (password.value !== passwordConfirmation.value) {
			return passwordConfirmation.setErrors({
				mismatchedPasswords: true
			});
		}
    }
}
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
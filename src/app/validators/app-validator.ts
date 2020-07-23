import { FormGroup,FormControl,AbstractControl,ValidationErrors, ValidatorFn} from "@angular/forms";
// export class AppValidator {
// }

export function emailValidator(control: FormControl): { [key: string]: any } {
	var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
	if (control.value && !emailRegexp.test(control.value)) {
		return { invalidEmail: true };
	}
}

export function mobileValidator(control: FormControl): { [key: string]: any } {
	var mobileRegexp = /^[0-9]*$/;
	if (control.value && !mobileRegexp.test(control.value)) {
		return { invalidMobile: true };
	}
}

export function websiteValidator(control: FormControl): { [key: string]: any } {
	// var websiteRegexp = /(?!\s*$)(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
	// var websiteRegexp = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
	var websiteRegexp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.])([\/\w \.-]*)*\/?$/;
	if (control.value && !websiteRegexp.test(control.value)) {
		return { invalidWebsite: true };
	}
}

export function alphanumericValidator(
	control: FormControl
): { [key: string]: any } {
	var alphanumericRegexp = /^(?!\s*$)[a-zA-Z0-9\s]*$/;
	if (control.value && !alphanumericRegexp.test(control.value)) {
		return { invalidalphanumeric: true };
	}
}
export function spaceValidator(control: FormControl): { [key: string]: any } {
	var spaceRegexp = /^(?!\s*$)/;
	if (control.value && !spaceRegexp.test(control.value)) {
		return { invalidspace: true };
	}
}
export function nameValidator(control: FormControl): { [key: string]: any } {
	var nameRegexp = /^(?!\s*$)[a-zA-Z\s]*$/;
	if (control.value && !nameRegexp.test(control.value)) {
		return { invalidName: true };
	}
}
export function numberValidator(control: FormControl): { [key: string]: any } {
	var numberRegexp = /^(?!\s*$)[0-9]*$/;
	if (control.value && !numberRegexp.test(control.value)) {
		return { invalidNumber: true };
	}
}

export function passwordPattern(control: FormControl): { [key: string]: any } {
	var numberRegexp = /^((?=.*\d)(?=.*[A-Z])(?=.*\W).{6,})*$/;
	if (control.value && !numberRegexp.test(control.value)) {
		return { invalidPasswordPattern: true };
	}
}

export function postalcodeValidator(
	control: FormControl
): { [key: string]: any } {
	var mobileRegexp = /^[0-9]{6}$/;
	if (control.value && !mobileRegexp.test(control.value)) {
		return { invalidPostalcode: true };
	}
}

export function couponValidator(control: FormControl): { [key: string]: any } {
	var nameRegexp = /^(?!\s*$)[a-zA-Z0-9]*$/;
	if (control.value && !nameRegexp.test(control.value)) {
		return { invalidCoupon: true };
	}
}

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
	};
}

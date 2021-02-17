import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formarray:any;
  title = 'countrycode';
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom,CountryISO.China];
  

  form = new FormGroup({
    name : new FormControl(''),
    email: new FormControl(''),
    mobileNumber: new FormControl(''),
  })

  submit(){

    this.form.setValue({
      name: this.form.value.name,
      email: this.form.value.email,
      mobileNumber: this.form.value.mobileNumber.e164Number,
    })
    this.formarray= this.form.value;
  }
}

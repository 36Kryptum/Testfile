import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  captcha = ""
  solved = false
  constructor(private formBuilder:FormBuilder){
  }


  profileForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    address:[''],
    phoneNumber:[''],
    mailAddress:[''],
    dob:['',],
    agb:['',]
  });

    saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
    this.solved = true
  }

}

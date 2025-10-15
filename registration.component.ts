import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IsEvenNumber } from './IsEvenNumber';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  regFrm=new FormGroup(
    {
      email:new FormControl("",[Validators.required]),
    
      mobile:new FormControl("",[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$"),Validators.minLength(10)]),
      regNo:new FormControl("",[Validators.required,IsEvenNumber.isNumberEven])
    }
  );
  get mail()
  {
    return this.regFrm.get('email');
  }
  get mob()
  {
    return this.regFrm.get('mobile');
  }

}

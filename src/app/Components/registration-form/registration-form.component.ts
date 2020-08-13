import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public nameGroup= new FormGroup({
    userControl: new FormControl('',Validators.required),
    emailControl : new FormControl('',Validators.email),
    passwordControl : new FormControl('',Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit (){
    console.log(this.nameGroup.value);
  }
}

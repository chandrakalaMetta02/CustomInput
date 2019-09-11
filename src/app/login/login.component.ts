import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder) { }

 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
       
        password: ['', Validators.required]

    });
}

onSubmit() {
   

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    console.log(this.loginForm.value);
}
}

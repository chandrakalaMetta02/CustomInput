import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    templateUrl: 'registration.component.html',
    styleUrls:['registration.component.scss'],
    selector:'registration'
})
export class RegistrationComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder
    ) { 
      
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            username: ['', Validators.required],
            email: ['',Validators.email],
            password: ['', Validators.required],
           // reenterPswd: ['', Validators.required],
            dob:['', ]

        });
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

       alert('registration');
    }
}
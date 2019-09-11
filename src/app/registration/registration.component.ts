import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    templateUrl: 'registration.component.html',
    styleUrls:['registration.component.scss'],
    selector:'app-registration'
})
export class RegistrationComponent implements OnInit {
    registerForm: FormGroup;
   @Output() submitedForm= new EventEmitter();

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
       

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.value);
        this.submitedForm.emit();
    }
}
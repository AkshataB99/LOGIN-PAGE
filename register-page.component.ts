import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registrationForm!: FormGroup;
  genders = ['Male', 'Female', 'Other'];
  hide = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  // Getter for easier access to form controls in the template
  get f() { return this.registrationForm.controls; }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }
    console.log('Form submitted:', this.registrationForm.value);
    // Add logic here to handle form submission (e.g., API call)
  }
}
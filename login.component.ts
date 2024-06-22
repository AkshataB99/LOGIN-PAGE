
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1s ease-in')
      ])
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class LoginComponent {
  loginForm!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form in ngOnInit
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: new FormControl(false)// Define rememberMe as a FormControl with initial value false
    });
  }

  // Getter for easy access to form controls in the template
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Method to handle form submission
  loginUser() {
    if (this.loginForm.valid) {
      // Handle login logic
      console.log('Form Submitted', this.loginForm.value);
    }
  }
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  // Helper method to check password field type
  getFieldType(): string {
    return this.hide ? 'password' : 'text';
  }
}

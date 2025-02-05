import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  imports: [CommonModule,ReactiveFormsModule],
  standalone:true,
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  signInForm: any;
  formvalues:any;
  isEmailValid: boolean = false;
  emailNotExist: boolean = false;
  resetSuccess: boolean = false;
  isResetPasswordVisible: boolean = false; // Show/hide reset password form
  passwordVisible: boolean = false; // Toggle for password visibilityassword visibility

  emails = [
    { email1: 'ajay@gmail.com', email2: 'sushil@gmail.com' }
  ];
  constructor(private fb: FormBuilder, private router:Router) {}






  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });

    this.signInForm.get('confirmPassword')?.setValidators([Validators.required, this.passwordMatchValidator.bind(this)]);
  }

  // Custom password confirmation validator
  passwordMatchValidator(control: any): { [key: string]: boolean } | null {
    if (this.signInForm) {
      const newPassword = this.signInForm.get('newPassword')?.value;
      if (control.value !== newPassword) {
        return { passwordMismatch: true };
      }
    }
    return null;
  }

  // Function to handle form submission
  onSubmit(): void {
    const email = this.signInForm.get('email')?.value;
     
    // Check if the email exists in the predefined list (email1 or email2)
    const emailExists = this.emails.some(
      (emailObj) => emailObj.email1 === email || emailObj.email2 === email
    );

    if (emailExists) {
      // Email exists, show the password fields
      this.isEmailValid = true;
      this.emailNotExist = false;
      this.isResetPasswordVisible = true;
      this.resetSuccess = false;  // Reset success message
    } else {
      // Email does not exist
      this.emailNotExist = true;
      this.isResetPasswordVisible = false;

      this.isEmailValid = false;
    }
  }

  // Function to handle password reset success
  onReset(): void {
    if (this.signInForm.valid) {
      // Proceed to reset password logic (here we just simulate it)
    this.formvalues = this.signInForm.value;
    console.log(this.formvalues);
      this.resetSuccess = true;

      // Call your service to reset the password here (for now, it's simulated)
      this.signInForm.reset();
      // After successful reset, navigate to login page
      // setTimeout(() => this.goToLogin(), 2000); // Delay for user to see the success message
    }
  }
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  // Navigate to login page after password reset
  goToLogin(): void {
    this.router.navigate(['/login']);  // Using Angular Router to navigate
  }
}


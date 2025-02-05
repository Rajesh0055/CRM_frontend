import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  failedAttempts: number = 0;
  showResetPasswordButton: boolean = false;
  signInForm: FormGroup;
  formvalues: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.formvalues = this.signInForm.value;
      console.log(this.formvalues);
      this.signInForm.reset();

      const isLoginSuccessful = this.mockLoginCheck(this.formvalues);
      if (!isLoginSuccessful) {
        this.failedAttempts++;
        console.log('Failed attempt', this.failedAttempts);
        if (this.failedAttempts >= 3) {
          this.showResetPasswordButton = true;
        }
      } else {
        this.failedAttempts = 0;
        console.log('Login successful!');
      }
    }
  }

  mockLoginCheck(formValues: { email: string; password: string }) {
    if (formValues.email !== 'test@example.com' || formValues.password !== 'password123') {
      return false;
    }
    return true;
  }

  onResetPassword() {
    this.failedAttempts = 0;
    this.showResetPasswordButton = false;
    this.router.navigate(['/reset']);
  }
}
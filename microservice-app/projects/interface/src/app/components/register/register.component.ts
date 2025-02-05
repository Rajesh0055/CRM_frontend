import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAuthService } from '../../services/google-auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RegisterUser, UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HttpClientModule], // Ensure HttpClientModule is imported
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Fixed typo (styleUrl → styleUrls)
})
export class RegisterComponent {
  signUpForm: FormGroup; // ✅ Strongly typed form group
  successMessage: string = '';
  errorMessage: string = '';
  formValues: RegisterUser = new RegisterUser(); // ✅ Use RegisterUser model

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private googleAuthService: GoogleAuthService
  ) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]] // Renamed 'mobile' to 'password' if it's meant for authentication
    });
  }

  register() {
    if (this.signUpForm.valid) {
      // ✅ Assign form values to the model correctly
      this.formValues = new RegisterUser(this.signUpForm.value);

      this.userService.registerUser(this.formValues).subscribe(
        (response) => {
          this.successMessage = 'User registered successfully!';
          this.errorMessage = '';
          alert(this.successMessage);
          this.signUpForm.reset();
        },
        (error) => {
          this.errorMessage = 'There was an error registering the user.';
          this.successMessage = '';
          console.error(error);
          alert(this.errorMessage);
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.formValues = new RegisterUser(this.signUpForm.value);
      console.log(this.formValues);
      this.signUpForm.reset();
    }
  }
}

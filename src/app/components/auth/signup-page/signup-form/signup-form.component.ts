import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit  {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: this.fb.control('',Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });


  }
  onSubmit(){
    console.log(this.signupForm);

    const email: string = this.signupForm.get('email')?.value;
    const password: string = this.signupForm.get('password')?.value;

    this.authService
      .login({ email, password })
      .subscribe((res: any): void => {
        console.log(res);
      });

  }

}

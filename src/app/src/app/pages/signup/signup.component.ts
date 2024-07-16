// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [RouterLink,FormsModule],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
// export class SignupComponent {
//   signObj: Signup;
//   constructor(private http:HttpClient,private router:Router){
//     this.signObj = new Signup();
//   }
  
//   onSignup(){
//     this.http.post('https://task-manager-api-rqs7.onrender.com/api/v1/signin',this.signObj).subscribe((res:any)=>{
//       this.router.navigateByUrl('/login');
//       alert(res.message);
//     })
//   }
// }
// export class Signup{
//   username: String;
//   email:String;
//   password: String;
//   constructor(){
//     this.username = '';
//     this.password = '';
//     this.email = '';
//   }
// }
import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,FormsModule, ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private http:HttpClient,private router:Router){
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }
  
  get username() { return this.signupForm.get('username'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }

  onSignup(){
    if (this.signupForm.valid) {
      this.http.post('https://task-manager-api-rqs7.onrender.com/api/v1/signin',this.signupForm.value).subscribe((res:any)=>{
        this.router.navigateByUrl('/login');
        alert(res.message);
      },
      (error: any) => {
        alert(error.error.message);
      })
    }
  }
}
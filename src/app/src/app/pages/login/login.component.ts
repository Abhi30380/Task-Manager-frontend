import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logObj: Login;
  constructor(private http:HttpClient,private router:Router){
    this.logObj = new Login();
  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  onLogin(){
    const formData = this.loginForm.value;
    this.http.post('https://task-manager-api-rqs7.onrender.com/api/v1/login',formData).subscribe((res:any)=>{
      if(!res.id){
        alert(res.message);
      }else{
        localStorage.clear();
        localStorage.setItem('id', res.id);
        localStorage.setItem('Authorization',`bearer ${res.token}`);
        localStorage.setItem('username',res.username);
        this.router.navigateByUrl('/alltasks').then(() => {
          window.location.reload();
        });
        alert("login success");
      }
    },
    (error: any) => {
      alert(error.error.message);
    })
  }
}
export class Login{
  email:String;
  password: String;
  constructor(){
    this.password = '';
    this.email = '';
  }
}
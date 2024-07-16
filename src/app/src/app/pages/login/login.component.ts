import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logObj: Login;
  constructor(private http:HttpClient,private router:Router){
    this.logObj = new Login();
  }
  onLogin(){
    this.http.post('https://task-manager-api-rqs7.onrender.com/api/v1/login',this.logObj).subscribe((res:any)=>{
      if(!res.id){
        alert(res.message);
      }else{
        localStorage.clear();
        localStorage.setItem('id', res.id);
        localStorage.setItem('Authorization',`bearer ${res.token}`);
        localStorage.setItem('username',res.username);
        this.router.navigateByUrl('/alltasks');

        alert("login success");
      }
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
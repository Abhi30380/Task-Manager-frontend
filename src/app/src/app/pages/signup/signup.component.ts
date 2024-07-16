import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signObj: Signup;
  constructor(private http:HttpClient,private router:Router){
    this.signObj = new Signup();
  }
  onSignup(){
    this.http.post('https://task-manager-api-rqs7.onrender.com/api/v1/signin',this.signObj).subscribe((res:any)=>{
      this.router.navigateByUrl('/login');
      alert(res.message);
    })
  }
}
export class Signup{
  username: String;
  email:String;
  password: String;
  constructor(){
    this.username = '';
    this.password = '';
    this.email = '';
  }
}

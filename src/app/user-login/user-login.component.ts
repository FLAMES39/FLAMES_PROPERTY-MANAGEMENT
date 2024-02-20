import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../states/appStates';
import { userLogin } from '../states/Actions/userActions';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  constructor( private fb:FormBuilder , private router:Router, private store:Store<AppState>){

  }
  errorMessage=null
  form!:FormGroup
  ngOnInit(): void {
    this.form=this.fb.group({
      
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]]
      
    })
  }


  onSubmit(){

  }
  submitForm(){
    // this.userservice.logUser(this.form.value).subscribe( res=>{
    //   res.message
    //   // localStorage.setItem('token', res.token),
    //   // localStorage.setItem('role', res.role)
    //   // localStorage.setItem('message', res.message)
     
    //   this.authservice.loggedIn(res)
    //   this.router.navigate(['/allProperty'])
      
    // },
    // err=>{
    //   this.errorMessage=err.message
    // })
    this.store.dispatch(userLogin({loggedUser:this.form.value}))
    
  }  

  nav(){
    this.router.navigate(['/UserReg'])
  }
}

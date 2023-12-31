import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../states/appStates';
import { LoggedLandlord } from '../states/Actions/landlordActions';


@Component({
  selector: 'app-landlord-login',
  templateUrl: './landlord-login.component.html',
  styleUrls: ['./landlord-login.component.css'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,RouterModule]
})
export class LandlordLoginComponent {
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
    // this.landlordservice.logLandlord(this.form.value).subscribe( res=>{
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

    this.store.dispatch(LoggedLandlord({landlord:this.form.value}))
  }

}

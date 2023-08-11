import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppState } from '../states/appStates';
import { Store } from '@ngrx/store';
import { RegisteredLandlord } from '../states/Actions/landlordActions';

@Component({
  selector: 'app-landlord-register',
  templateUrl: './landlord-register.component.html',
  styleUrls: ['./landlord-register.component.css'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,RouterModule]
})
export class LandlordRegisterComponent {
  constructor(private fb:FormBuilder, private store:Store<AppState> ,private authservice:AuthService){}
  form!: FormGroup
  errorMessage=null
  ngOnInit(): void {
   this.form=this.fb.group({
    
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]],
      propertyDocs:['',[Validators.required]]
    
   })
  }
  
onsubmit(){

}

submitForm(){
//  console.log(this.form.value);
// this.landlordservice.addlandLord(this.form.value).subscribe(res=>{
//   res.message
//   this.authservice.loggedIn(res)
// })
this.store.dispatch(RegisteredLandlord({landlord:this.form.value}))
}
}

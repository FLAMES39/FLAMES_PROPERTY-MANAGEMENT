import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  unAllowedName=['Ademola','Christian','Abiodun']
  ngOnInit(): void {
   this.form=this.fb.group({
    
      name:['',[Validators.required,this.checkUnAllowedName]],  
      email:[null,[Validators.required,Validators.email],[<AsyncValidatorFn>this.checkEmail]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]],
      propertyDocs:['',[Validators.required]]
    
   })
  }
  checkEmail(controls:FormControl):Promise<{[x:string]:Boolean } |null>{
    const promise= new Promise<{[x:string]:Boolean } |null>((resolve,reject)=>{
      if(controls.value==="testemail@gmail.com"){
        setTimeout(()=>{
          resolve ({emailUnallowed:true})
        },1500)
      }
     else{
      resolve(null)
     }
    })
    return promise
 }


 checkUnAllowedName=(controls:FormControl):{[x:string]:boolean} | null=>{
    if(this.unAllowedName.includes(controls.value)){
      return {unAllowedName:true}
    }
    return null
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

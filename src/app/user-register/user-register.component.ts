import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  constructor(private fb:FormBuilder, private userservice:UserService){}
  form!: FormGroup
  errorMessage=null
  ngOnInit(): void {
   this.form=this.fb.group({
    
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]]
    
   })
  }
  
onsubmit(){

}

submitForm(){
//  console.log(this.form.value);
  this.userservice.addUser(this.form.value).subscribe( res=>{
   console.log( res.message);
   
  },err=>{
    this.errorMessage= err.message
  })
}

}

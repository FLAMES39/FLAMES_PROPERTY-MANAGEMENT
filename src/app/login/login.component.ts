import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private fb:FormBuilder){

  }
  form!:FormGroup
  ngOnInit(): void {
    this.form=this.fb.group({
      personalDetails:this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]]
      })
    })
  }


  onSubmit(){

  }
}

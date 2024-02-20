import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-land-lord',
  templateUrl: './land-lord.component.html',
  styleUrls: ['./land-lord.component.css']
})
export class HTTPClientModuleLandLordComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router){

  }

  form!:FormGroup

  ngOnInit(): void {
    this.form=this.fb.group({
      personalDetails:this.fb.group({
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        Password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]]
      })
    })
  }
  takeMe(){
    this.router.navigate(['/register','Userreg'])
  }
  onsubmit(){

  }
}

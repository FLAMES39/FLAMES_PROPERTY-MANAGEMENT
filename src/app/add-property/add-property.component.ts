import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyService } from '../services/property.service';
import { Store } from '@ngrx/store';
import { AppState } from '../states/appStates';
import { addProperty } from '../states/Actions/propetyActions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  constructor( private fb:FormBuilder , private store:Store<AppState>,private router:Router){}
  form!:FormGroup
  ngOnInit(): void {
    this.form=this.fb.group({
      name:['',[Validators.required]],
      type:['',[Validators.required]],
      city:['',[Validators.required]],
      address:['',[Validators.required]],
      price:['',[Validators.required]],
      imageUrl:['',[Validators.required]],
      location:['',[Validators.required]],
      country:['',[Validators.required]]
    })
  }
  
  onsubmit(){
    
  }
  submitForm(){
    console.log(this.form.value
      );
    //communicating with service direct
    // this.propertyservice.AddProperty(this.form.value).subscribe(res=>{
    //   res.message

///commmunicating with the store thus the component becoming pure
    this.store.dispatch(addProperty({newProperty:this.form.value}))
    this.router.navigate(['/allProperty'])

    
  }
}

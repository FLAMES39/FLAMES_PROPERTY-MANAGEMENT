import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ErrorDirective } from './Directives/error.directive';
import { ErrorComponent } from './error/error.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_app';
  message!: string | null
  sub!:Subscription
  @ViewChild(ErrorDirective) Errorhostname!:ErrorDirective
  constructor( public authservice:AuthService ,private componentFactory:ComponentFactoryResolver){}
  onclose(){
    this.message=null
  }
  showError(){
    this.message= "An Error Occured Please Try Again Later....."
    this.createComponent()
  }

  createComponent(){
    const ErrorComponentFactory = this.componentFactory.resolveComponentFactory(ErrorComponent)
    const HostViewContainer= this.Errorhostname.viewContainerref
    HostViewContainer.clear()
    const componentRef= HostViewContainer.createComponent(ErrorComponentFactory)
    componentRef.instance.message= this.message
    this.sub=componentRef.instance.close.subscribe(()=>{
      HostViewContainer.clear()
      this.sub.unsubscribe()
    })

   
  }
  
}


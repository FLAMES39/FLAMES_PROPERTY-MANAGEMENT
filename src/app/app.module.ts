import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LandLordComponent } from './Registration/land-lord/land-lord.component';
import { UserComponent } from './Registration/user/user.component';
import { FooterComponent } from "./footer/footer.component";
import { LandlordLoginComponent } from './landlord-login/landlord-login.component';
import { LandlordRegisterComponent } from './landlord-register/landlord-register.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { paragraphReducer } from './states/Reducers/paragraphReducer';
import { counterReducer } from './states/Reducers/counter';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { propertyReducer } from './states/Reducers/propertyReducer';
import { EffectsModule } from '@ngrx/effects';
import { propertyEffects } from './states/effects/propertyEffects';
import { userEffects } from './states/effects/userEfects';
import { LandlordEffects } from './states/effects/landLordEffects';
import { ErrorComponent } from './error/error.component';
import { ErrorDirective } from './Directives/error.directive';

@NgModule({
    declarations: [
        // LandLordComponent,
        UserComponent,
        AppComponent,
        ErrorDirective

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FooterComponent,
        ErrorComponent,
        HttpClientModule,
        StoreModule.forRoot({paragraph:paragraphReducer, counter:counterReducer,property:propertyReducer}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        EffectsModule.forRoot([propertyEffects,userEffects,LandlordEffects])
    ]
})
export class AppModule { }

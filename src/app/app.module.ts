import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireRemoteConfigModule, DEFAULTS, SETTINGS } from '@angular/fire/compat/remote-config';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { ProductComponent } from './product/product.component';
import { FeaturesComponent } from './product/features/features.component';
import { FeatureComponent } from './product/features/feature/feature.component';
import { EmailInputComponent } from './product/email-input/email-input.component';
import { FeedbackComponent } from './product/feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    ProductComponent,
    FeaturesComponent,
    FeatureComponent,
    EmailInputComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireRemoteConfigModule,
    NgbModule
  ],
  providers: [
    { provide: DEFAULTS, useValue: { enableAwesome: true } },
    {
      provide: SETTINGS,
      useFactory: () => isDevMode() ? { minimumFetchIntervalMillis: 10_000 } : {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

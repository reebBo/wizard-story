import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';


//test
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepsComponent } from './steps/steps.component';
import { HomeComponent } from './home/home.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgWizardModule.forRoot(ngWizardConfig),
    FormsModule,
    ReactiveFormsModule,
    NgbModule, NgbDatepickerModule, NgbTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

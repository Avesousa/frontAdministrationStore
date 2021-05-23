import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from 'src/auth/login/login.component';
import { AppModuleRouting } from 'src/app/app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AppModuleRouting
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule {}

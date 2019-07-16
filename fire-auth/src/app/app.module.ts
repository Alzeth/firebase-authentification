import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AuthService } from "./services/auth.service";

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		SignInComponent,
		SignUpComponent,
		ForgotPasswordComponent,
		VerifyEmailComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatInputModule,
		MatIconModule,
		MatToolbarModule,
		MatListModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AppRoutingModule,
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatInputModule,
		MatIconModule,
		MatToolbarModule,
		MatListModule
	],
	providers: [
		AuthService,
		{ provide: LocationStrategy, useClass: PathLocationStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

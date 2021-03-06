import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './config-module/app-router.module';
import { MaterialWrapModule } from './config-module/material-wrap.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AuthenService, FirebaseService } from './service';
import { AuthGuardService } from './guard/auth-guard.service';

import { AppComponent } from './app.component';

import { TemplateComponent } from './page/template/template.component';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LoginComponent } from './page/login/login.component';

import 'hammerjs';
import { PostComponent } from './component/post/post.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { CreatePostComponent } from './page/create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    PageNotFoundComponent,
    LoginComponent,
    PostComponent,
    PostListComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    MaterialWrapModule,
    FormsModule,
    AppRouterModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDZlyvixJBqR8dgRh47eH5asofo-Z6frSo',
      authDomain: 'pwa-white-space.firebaseapp.com',
      databaseURL: 'https://pwa-white-space.firebaseio.com',
      projectId: 'pwa-white-space',
      storageBucket: 'pwa-white-space.appspot.com',
      messagingSenderId: '281280781534'
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuardService, AuthenService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

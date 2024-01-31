import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonCounterComponent } from './components/button-counter/button-counter.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { StoreModule } from '@ngrx/store';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MainCOunterComponent } from './components/main-counter/main-counter.component';
import { BlogComponent } from './components/blog/blog.component';
import { CommonModule } from '@angular/common';
import { AppState } from './shared/GloabalState/app.state';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './shared/effectsStore/posts.effects';
import { PostMainComponent } from './Posts/postComponent/post-main/post-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    ButtonCounterComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
    MainCOunterComponent,
    BlogComponent,
    AddBlogComponent,
    PostMainComponent
  ],
  imports: [
    HttpClientModule,
    MatSnackBarModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([PostsEffects]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

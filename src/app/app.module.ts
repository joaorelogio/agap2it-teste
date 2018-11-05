import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { EmptyComponent } from './components/empty/empty.component';
import { FormComponent } from './components/form/form.component';
import { PostsComponent } from './components/posts/posts.component';

// import { CustomValidatorService } from './services/custom-validator.service';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    ContentComponent,
    EmptyComponent,
    FormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // CustomValidatorService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

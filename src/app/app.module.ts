import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { AddNewPostComponent } from './components/add-new-post/add-new-post.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { PostService } from './services/posts.service';

@NgModule({
  declarations: [
    PostsListComponent,
    AddNewPostComponent,
    AddNewUserComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

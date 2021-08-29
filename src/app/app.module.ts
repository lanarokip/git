import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { RepoComponent } from './components/repo/repo.component';
import { GitUsersComponent } from './components/git-users/git-users.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    RepoComponent,
    GitUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

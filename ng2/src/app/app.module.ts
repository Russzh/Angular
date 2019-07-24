import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RootRenderer } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { HoverDirective } from './hover.directive'
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SetupPageComponent } from './components/setup-page/setup-page.component';
import { RouterModule} from '@angular/router'

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

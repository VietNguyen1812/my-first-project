import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FormbuttonComponent } from './component/formbutton/formbutton.component';
import { CounterComponent } from './component/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { blogReducer } from './shared/store/blog/blog.reducer';
import { HeaderMenuComponent } from './component/header-menu/header-menu.component';
import { AppState } from './shared/store/Global/App.state';
@NgModule({
  declarations: [
    AppComponent,
    FormbuttonComponent,
    CounterComponent,
    HeaderMenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TabMenuModule,
    TableModule,
    StoreModule.forRoot(AppState),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

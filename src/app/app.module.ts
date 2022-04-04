import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './helpers';

// Modules
import { DashboardModule } from './web/dashboard/dashboard.module';
import { NotexistspageComponent } from './web/notexistspage/notexistspage.component';

// Components

@NgModule({
  declarations: [
    AppComponent,
    NotexistspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

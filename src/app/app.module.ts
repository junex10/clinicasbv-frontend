import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { local, prod } from 'src/environments';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgxSpinnerModule } from "ngx-spinner";
import { ApiInterceptor } from './helpers';

// Modules
import { DashboardModule } from './web/dashboard/dashboard.module';

const socket: SocketIoConfig = { url: !local.production ? local.socket : prod.socket, options: {
  transports: ['websocket']
} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,

    // Socket
    SocketIoModule.forRoot(socket),

    DashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, 
  MatGridListModule, MatCardModule, MatMenuModule } 
  from '@angular/material';
import {NgbPanel, NgbAccordion} from '@ng-bootstrap/ng-bootstrap';
import { MatBoardComponent } from './mat-board/mat-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuard } from './defender/route.guard';
import { JwtInterceptor } from './support-utility/jwt.interceptor';
import { ErrorInterceptor } from './support-utility/error.interceptor';
import { localBackendProvider } from './support-utility/local-backend';
import { MessageService } from './custom-service/message.service';
import { AuthenticationService } from './custom-service/authentication.service';
import { UserService } from './custom-service/user.service';
@NgModule({
  declarations: [
    AppComponent,
    MatNavComponent,
    MatBoardComponent,
    PageNotFoundComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent,
    //NgbPanel,
    //NgbAccordion
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,    
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    RouteGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    localBackendProvider,
    MessageService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

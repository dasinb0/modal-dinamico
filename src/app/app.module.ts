import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal-pecho/modal-pecho.component';
import { ModalService } from './modal-pecho/modal-pecho.service';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ModalService],
  bootstrap: [AppComponent,]
})
export class AppModule { }




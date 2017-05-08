import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PubNubAngular } from 'pubnub-angular2';
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
    providers: [PubNubAngular]
})
export class AppModule {

}
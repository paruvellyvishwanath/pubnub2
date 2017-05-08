import { Component, OnInit } from '@angular/core';
import { PubNubAngular } from "pubnub-angular2";


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [PubNubAngular]
})
export class AppComponent implements OnInit {
    constructor(private pubnubService: PubNubAngular) {
      
    }
    ngOnInit(): void {
        var pubnub = new PubNubAngular();
        pubnub.init({
            publishKey: 'XXXX',
            subscribeKey:'XXXX'
        });
         pubnub.subscribe({
      channel: 'Order',
      callback: function(m) {console.log("M "+m);}
    });
    }

   
}
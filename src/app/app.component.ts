import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';
import {
  IonApp,
  IonContent,
  MenuController,
  ToastController,
} from '@ionic/angular/standalone';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    IonContent,
    IonApp,
  ],
  providers: [MenuController, ToastController],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private screenOrientation: ScreenOrientation, private platform: Platform) {
    this.platform.ready().then(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (height < 600 || width > height) {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      } else {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      }
    });
    this.init();
  }
  async ngOnInit() {
  }

  async init() {
    await StatusBar.setOverlaysWebView({ overlay: true });
    await StatusBar.hide();
  }
}

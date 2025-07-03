import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';
import {
  IonApp,
  IonContent,
  MenuController,
  ToastController,
} from '@ionic/angular/standalone';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { IframeToggleTButtonComponent } from './components/iframe-toggle-button/iframe-toggle-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonApp,
    IframeToggleTButtonComponent,
  ],
  providers: [MenuController, ToastController],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  showIframe = false;

  async ngOnInit() {
  }

  async init() {
    await StatusBar.setOverlaysWebView({ overlay: true });
    await StatusBar.hide();
  }

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

  clickSound = new Audio('assets/sounds/click.wav');

  playClickSound() {
    this.clickSound.currentTime = 0;
    this.clickSound.play();
  }

  toggleIframe() {
    this.playClickSound();
    this.showIframe = !this.showIframe;
  }

  exitApp() {
    if (this.platform.is('cordova')) {
      navigator['app'].exitApp()
    }
  }
}

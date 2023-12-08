import { Component, OnInit } from '@angular/core';
import {BarcodeScanner,BarcodeFormat,LensFacing,Barcode} from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.page.html',
  styleUrls: ['./pointage.page.scss'],
})
export class PointagePage implements OnInit {

  constructor(private alertController: AlertController) { }

  isSupported = false;
  barcodes: Barcode[] = [];

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }


  ngOnInit() {
      BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }
}

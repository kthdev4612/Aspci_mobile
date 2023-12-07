import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-besoins',
  templateUrl: './besoins.page.html',
  styleUrls: ['./besoins.page.scss'],
})
export class BesoinsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

}

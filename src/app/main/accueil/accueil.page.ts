import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor() { }


   //@ts-ignore
   userInfo:any = JSON.parse(sessionStorage.getItem('infoLogin'))
   is_user_logged_in = !!sessionStorage.getItem('infoLogin')

  ngOnInit() {
    console.log(this.userInfo);

  }

}

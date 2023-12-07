import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signale',
  templateUrl: './signale.page.html',
  styleUrls: ['./signale.page.scss'],
})
export class SignalePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  redirectToPage(PaiementType: string){
    if (PaiementType === 'besoin') {
      this.router.navigate(['/main/besoins']); 
    }
    if (PaiementType === 'incident') {
      this.router.navigate(['/main/incidents']); 
    }
  }



}

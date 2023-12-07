import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
// Import the jQuery library (if used in your project)
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private _router: Router) { }

  public appPages = [
    { title: 'Home', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Scanne', url: '/folder/favorites', icon: 'heart' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Partagé l\ application'];
  
    // Create a Subject to manage the observable's lifecycle
    closed$ = new Subject<any>();

    showTabs:boolean=true

  ngOnInit() {


      // Subscribe to router events to control tab visibility based on routes
      this._router.events.pipe(
        filter(e => e instanceof NavigationEnd),
        takeUntil(this.closed$)
      ).subscribe(event => {
        // Check the route and hide tabs on specific pages
        // @ts-ignore
        if (
            // @ts-ignore
          event['url'].indexOf('/main/besoins') != -1 ||
            // @ts-ignore
          event['url'].indexOf('/main/incidents') != -1 
        ) {
          this.showTabs = false;
        } else {
          this.showTabs = true;
        }
      });
  }
}

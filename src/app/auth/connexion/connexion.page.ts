import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
declare var $:any;


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(private router: Router, private http: ApiService) { }


  data:any
  erreur:any

  ngOnInit() {

  }

  login_form: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    matricule: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  })


  LoginUser(){

    this.http.loginUser(this.login_form.value).subscribe({
      next: (res:any)=>{
        this.data= res?.result;
        console.log(this.data);

        // $.cookie('isLoggedIn', true, { expires: 1 ,path: ''});
        // $.notify("Access granted", "success");
        sessionStorage.setItem('infoLogin',JSON.stringify(this.data));
        if (res?.status === "success") {
          this.router.navigate(['/main','accueil'])

        }
      },
      error: (err:any)=>{
        this.erreur = err?.error_description
        console.log(this.erreur);
      }
    })

  }

}

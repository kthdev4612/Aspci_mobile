import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(private router: Router) { }

  login_form: FormGroup = new FormGroup({
    nom_complet: new FormControl(null, Validators.required),
    matricul_agent: new FormControl(null, Validators.required),
    mot_de_passe: new FormControl(null, Validators.required),
  })

  ngOnInit() {
  }

  login(){
  
    console.log(this.login_form.value);
    
    this.router.navigate(['/main/accueil'])
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-scann-form',
  templateUrl: './scann-form.page.html',
  styleUrls: ['./scann-form.page.scss'],
})
export class ScannFormPage implements OnInit {

  constructor(private http: ApiService, private router: Router) { }

     //@ts-ignore
     userInfo:any = JSON.parse(sessionStorage.getItem('infoLogin'))
     is_user_logged_in = !!sessionStorage.getItem('infoLogin')

  ngOnInit() {
    console.log(this.userInfo);

  }

  validate_form: FormGroup = new FormGroup({
    matricule : new FormControl(null, Validators.required)
  })



  verify(){
    if (this.validate_form.get('matricule')?.value == this.userInfo?.matricule) {
      this.http.CreateReport(this.validate_form.value).subscribe({
        next: (res:any) =>{
          if (res?.satus === "success") {
            this.router.navigate(["/main"])
          }
        }
      })

    }else{
      alert('Votre matricule est incorrecte ):')

    }

  }

}

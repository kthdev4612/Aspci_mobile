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

     validate_form: FormGroup = new FormGroup({
       p_matricule : new FormControl(null, Validators.required),
       p_firstname : new FormControl(null, Validators.required),
       p_lastname : new FormControl(null, Validators.required),
       admin_id : new FormControl(null, Validators.required)
     })


  ngOnInit() {
    console.log(this.userInfo);
    this.validate_form.get('p_firstname')?.setValue(this.userInfo?.firstname)
    this.validate_form.get('p_lastname')?.setValue(this.userInfo?.lastname)
    this.validate_form.get('admin_id')?.setValue(this.userInfo?.admin_id)
  }




  verify(){
    if (this.validate_form.get('p_matricule')?.value == this.userInfo?.matricule) {
      this.http.CreatePresence(this.validate_form.value).subscribe({
        next: (res:any) =>{
          if (res?.status === "success") {
            this.router.navigate(["/main"])
          }
        }
      })

    }else{
      alert('Votre matricule est incorrecte ):')

    }

    console.log(this.validate_form?.value);


  }

}

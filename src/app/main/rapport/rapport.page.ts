import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.page.html',
  styleUrls: ['./rapport.page.scss'],
})
export class RapportPage implements OnInit {

  constructor(private http: ApiService) { }

  //@ts-ignore
  userInfo:any = JSON.parse(sessionStorage.getItem('infoLogin'))
  is_user_logged_in = !!sessionStorage.getItem('infoLogin')

  data:any
  report_form: FormGroup = new FormGroup({
    coment: new FormControl(null, Validators.required),
    user_id: new FormControl(null, Validators.required),
    admin_id: new FormControl(null, Validators.required),
    user_matricule: new FormControl(null, Validators.required),
    user_uid: new FormControl(null, Validators.required)
  })
  ngOnInit() {
    console.log(this.userInfo);
    this.report_form.get('user_id')?.setValue(this.userInfo?.id);
    this.report_form.get('user_matricule')?.setValue(this.userInfo?.matricule);
    this.report_form.get('user_uid')?.setValue(this.userInfo?.uid);
    this.report_form.get('admin_id')?.setValue(this.userInfo?.admin_id);
  }

  report(){
    // console.log(this.report_form.value);

    this.http.CreateReport2(this.report_form.value).subscribe({
      next: (r:any)=>{
        this.data = r
        // console.log(this.report_form.value);
        console.log(this.data);
        

      }
    })

  }
}

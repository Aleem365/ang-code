import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.modal';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    apiData:any=FormGroup;
    userDetail:any={};
    rout:string='';
    userid:string='';
  constructor(private client:ApiServiceService) { }

  ngOnInit(): void {
    this.apiData=new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    })
    this.client.sendData.subscribe((res)=>{
      this.userDetail=res;
      this.apiData.setValue({
        name:this.userDetail.name,
        email:this.userDetail.email,
        password:this.userDetail.password,
      })
    })
    this.client.sendUrl.subscribe((res)=>{
      this.userid=res;
    })
  }
  onSubmit(value:User){
      this.client.upData(value,this.userid).subscribe((res)=>{
        console.log(res)
      this.rout='table'
  })
}
}

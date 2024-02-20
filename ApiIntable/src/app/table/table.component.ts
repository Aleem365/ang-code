import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';
import { User } from '../interfaces/user.modal';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
   userData:any=FormGroup;
   userarr:any  =[ ];
   editMod:boolean=false;
   editUserId:string='';
  constructor(private client:ApiServiceService){}

  ngOnInit(): void {
    this.userData= new FormGroup({
      name :new FormControl(''),
      email : new FormControl (''),
      password :new FormControl(''),
    })
    this.onFatch();
  }

  onSubmit(Data:User){
 
    
      this.client.postData(Data).subscribe((res:User)=>{
        this.onFatch();
      })
    
    this.userData.reset();
  }
  onFatch(){
    this.client.getData().pipe(map((res:any)=>{
      const fdata=[];
      for(let key in res){
        if(res.hasOwnProperty(key)){
          fdata.push({userId:key,...res[key]});
        }
      }
      return fdata;
    })).subscribe((res)=>{
      this.userarr=res;
    })
  }

  onEdit(index:number){
    this.editUserId=this.userarr[index].userId
    // this.editUserId=userid
    console.log(this.editUserId)
    this.userData.setValue({
        name:this.userarr[index].name,
        email:this.userarr[index].email,
        password:this.userarr[index].password,
    })
    // this.editMod=true;
    this.client.sendData.next(this.userData.value)
    this.client.sendUrl.next(this.editUserId)
  }
  
  onRemove(userid:string){
if(confirm('Do you want to delete this user?')){
     this.client.delData(userid).subscribe((res)=>{
     this.onFatch();
    }) 
    }
  }
}

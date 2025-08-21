import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
Mails:any[]=[];
constructor(private _mailService:MailService){
  _mailService.getmails().subscribe(
    (maildata:any)=>{
    console.log(maildata);
    this.Mails=maildata;
    console.log("vehicles data:",this.Mails);
    },(err:any)=>{
      alert("Internal server Error");
    }
  )
}
}

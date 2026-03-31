import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  profilePic:string="../../assets/images/HarithaCk.jpg"

  user={

    name:"Haritha C K",

    degree:"BSc Computer Science",

    dob:"July 1 1994",

    phone:"9961601974",

    email:"haritha601974@gmail.com",

    address:"Parakkulam (H),Gov press (PO),Kulappully,Shoranur-2",

    experience:"Fresher"

  }
}

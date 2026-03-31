import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  sendMessage(namebox:any,emailbox:any,subjectbox:any){

    console.log(namebox.value);

    console.log(emailbox);

    console.log(subjectbox);

   

  }

  sendToWhatsApp() {

  const name = (document.getElementById("name") as HTMLInputElement)?.value;
  const email = (document.getElementById("email") as HTMLInputElement)?.value;
  const subject = (document.getElementById("subject") as HTMLInputElement)?.value;
  const message = (document.getElementById("message") as HTMLTextAreaElement)?.value;

  const phoneNumber = "919961601974"; // 👉 your WhatsApp number (with country code)

  const text = `Hello, my name is ${name}%0A
Email: ${email}%0A
Subject: ${subject}%0A
Message: ${message}`;

  const url = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(url, "_blank");
}
}

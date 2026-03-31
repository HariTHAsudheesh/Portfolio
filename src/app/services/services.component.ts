import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services = [
    {
      title: "Web Design",
      description: "Modern responsive website design",
      icon: "fa fa-laptop"
    },
    {
      title: "Web Development",
      description: "Full stack development using Django & Angular",
      icon: "fa fa-code"
    },
    {
      title: "App Design",
      description: "UI/UX design for mobile applications",
      icon: "fab fa-android"
    },
    {
      title: "App Development",
      description: "Cross-platform app development",
      icon: "fab fa-apple"
    },
    {
      title: "SEO",
      description: "Improve website ranking and visibility",
      icon: "fa fa-search"
    },
    {
      title: "Content Creation",
      description: "Creative and engaging content",
      icon: "fa fa-edit"
    }
  ];

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
  {
    title: "Simple Calculator",
    description: "Simple calculator using html,css,javascript",
    image: "assets/images/image.png",
    github: "https://github.com/HariTHAsudheesh/Calculator.git",
    demo: "https://harithasudheesh.github.io/Calculator/"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio using Angular & Bootstrap",
    image: "assets/images/image copy 2.png",
    github: "https://github.com/HariTHAsudheesh/Portfolio.git",
    demo: "portfolio-1xkk.onrender.com/"
  },
  {
    title: "Online Learning Platform",
    description: "Full stack project using Django & Angular",
    image: "assets/images/project3.png",
    github: "https://github.com/yourlink",
    demo: "#"
  }
];
}

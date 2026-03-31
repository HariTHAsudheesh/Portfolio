import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  
  skills = [
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 45, category: "Frontend" },

  { name: "Angular", level: 50, category: "Framework" },

  { name: "Python", level: 85, category: "Backend" },
  { name: "Django", level: 50, category: "Backend" },

  { name: "MySQL", level: 75, category: "Database" },
  { name: "Git & GitHub", level: 70, category: "Version Control" }
];


    
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent {

  educations=[
    
    {name:"BSc Computer science",university:"BHARATHIYAR ",year:"2019-2023"},
    
  ]

  certifications=[

    {name:"Python Django Angular full stack web developer",company:"LUMINAR",grade:"A+"},
    {name:"Computer Teachers Training Program",company:"G TEC computer education",grade:"A+"},
    
  ]

}

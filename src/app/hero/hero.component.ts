import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name:string="Haritha C K"

  profileTitle:string="Full stack Developer"

  profileImg:string="../../assets/images/HarithaCk.jpg"
}

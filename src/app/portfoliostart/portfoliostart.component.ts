import { Component } from '@angular/core';

@Component({
  selector: 'app-portfoliostart',
  templateUrl: './portfoliostart.component.html',
  styleUrls: ['./portfoliostart.component.css']
})
export class PortfoliostartComponent {
  filter = 'all';
  projects = [
  {
    image: 'assets/images/image copy.png',
    category: 'design'
  },
  {
    image: 'assets/images/image.png',
    category: 'development'
  },
  {
    image: 'assets/images/p3.jpg',
    category: 'design'
  },
  {
    image: 'assets/images/p4.jpg',
    category: 'development'
  }
];
}

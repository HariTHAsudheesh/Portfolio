import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  testimonials = [
  {
    name: "Anu",
    role: "Teacher",
    message: "Very professional and clean work. Highly recommended!",
    image: "assets/images/user1.jpg"
  },
  {
    name: "Rahul",
    role: "Developer",
    message: "Amazing portfolio and great UI skills.",
    image: "assets/images/user2.jpg"
  },
  {
    name: "Meera",
    role: "Student",
    message: "Loved the design and responsiveness!",
    image: "assets/images/user3.jpg"
  }
];
}

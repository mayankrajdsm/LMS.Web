import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testimonial',
  imports: [CarouselModule, CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  testimonials = [
    {
      img: 'assets/images/testimonial-1.jpg',
      name: 'Client Name 1',
      profession: 'Profession 1',
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
    },
    {
      img: 'assets/images/testimonial-2.jpg',
      name: 'Client Name 2',
      profession: 'Profession 2',
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
    },
    {
      img: 'assets/images/testimonial-3.jpg',
      name: 'Client Name 3',
      profession: 'Profession 3',
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
    },
    {
      img: 'assets/images/testimonial-4.jpg',
      name: 'Client Name 4',
      profession: 'Profession 4',
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
    }
  ];
  customOptions = {
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 0,
    dots: true,
    loop: true,
    nav : false,
    responsive: {
      0:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      }
  }
  };
}

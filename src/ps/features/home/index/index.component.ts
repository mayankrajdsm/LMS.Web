import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [CarouselModule, CommonModule,],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  carouselSlides = [
    {
      title: 'Best Online Courses',
      subtitle: 'The Best Online Learning Platform',
      description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no...',
      bgClass: 'banner_1',
    },
    {
      title: 'Best Courses',
      subtitle: 'The Best Online Learning Platforms',
      description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no...',
      bgClass: 'banner_2',
    },
    {
      title: 'Courses',
      subtitle: 'The Best Online New Learning Platform',
      description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no...',
      bgClass: 'banner_3',
    }
  ];

  customOptions = {
    autoplay: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navSpeed: 400,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  courses = [
    {
      image: "assets/images/course-1.jpg",
      price: "$149.00",
      title: "Web Design & Development Course for Beginners",
      rating: 5,
      reviews: 123,
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: "30 Students"
    },
    {
      image: "assets/images/course-2.jpg",
      price: "$199.00",
      title: "Advanced UI/UX Design Principles",
      rating: 4.5,
      reviews: 98,
      instructor: "Jane Smith",
      duration: "2.30 Hrs",
      students: "45 Students"
    },
    {
      image: "assets/images/course-3.jpg",
      price: "$99.00",
      title: "Introduction to JavaScript Programming",
      rating: 4.8,
      reviews: 150,
      instructor: "David Brown",
      duration: "3.00 Hrs",
      students: "60 Students"
    }
  ];

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }
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
  customTestOptions = {
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

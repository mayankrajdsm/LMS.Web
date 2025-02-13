import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoriesComponent } from "../categories/categories.component";
import { CourseComponent } from "../course/course.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-index',
  imports: [CarouselModule, CategoriesComponent, CourseComponent, TestimonialComponent, CommonModule, ContactComponent],
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
}

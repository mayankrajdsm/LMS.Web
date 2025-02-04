import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServicesComponent } from "../services/services.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { CategoriesComponent } from "../categories/categories.component";
import { CourseComponent } from "../course/course.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-index',
  imports: [CarouselModule, ServicesComponent, AboutUsComponent, CategoriesComponent, CourseComponent, TestimonialComponent, CommonModule, ContactComponent],
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
      btn1Text: 'Read More',
      btn2Text: 'Join Now',
    },
    {
      title: 'Best Courses',
      subtitle: 'The Best Online Learning Platform',
      description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no...',
      bgClass: 'banner_2',
      btn1Text: 'Read More',
      btn2Text: 'Join Now',
    },
    {
      title: 'Courses',
      subtitle: 'The Best Online Learning Platform',
      description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no...',
      bgClass: 'banner_3',
      btn1Text: 'Read More',
      btn2Text: 'Join Now',
    }
  ];

  customOptions = {
    autoplay: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navSpeed: 400,
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

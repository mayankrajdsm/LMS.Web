import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout_Components } from './features/layout/layout-export';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout_Components, CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E-Learning';
}

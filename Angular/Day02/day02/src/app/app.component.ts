import { Component } from '@angular/core';
import { CheckOneWayComponent } from './components/binding/oneWayBinding/check-one-way.component';
import { SliderComponent } from './components/binding/oneWayBinding/slider/slider.component';
import { CheckTwoWayBindingComponent } from './components/binding/twoWayBinding/check-two-way-binding.component';
import { CheckDirectivesComponent } from './components/directives/check-directives/check-directives.component';
import { CheckCotrolFlowComponent } from './components/directives/check-directives/check-cotrol-flow/check-cotrol-flow.component';
import { CheckAttributesComponent } from './components/directives/attributesDirectives/check-attributes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CheckOneWayComponent,
    SliderComponent,
    CheckDirectivesComponent,
    CheckTwoWayBindingComponent,
    CheckCotrolFlowComponent,
    CheckAttributesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'day02';
}

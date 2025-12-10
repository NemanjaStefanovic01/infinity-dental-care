import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-heading',
  standalone: true,
  imports: [],
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.css'
})
export class SectionHeadingComponent {
  @Input() title: string = 'naslov'
  @Input() type: string = 'tip'
}

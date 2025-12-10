import { Component } from '@angular/core';
import { BtnSecundaryComponent } from '../../components/btn-secundary/btn-secundary.component';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    BtnSecundaryComponent,
    SectionHeadingComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  btnClicked(){
    
  }
}

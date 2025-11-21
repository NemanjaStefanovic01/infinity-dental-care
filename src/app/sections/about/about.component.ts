import { Component } from '@angular/core';
import { BtnSecundaryComponent } from '../../components/btn-secundary/btn-secundary.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BtnSecundaryComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  btnClicked(){
    
  }
}

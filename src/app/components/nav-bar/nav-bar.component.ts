import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {


  btnCtaClicked(){
    
  }
}

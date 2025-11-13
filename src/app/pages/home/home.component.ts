import { Component } from '@angular/core';
import { GlobalPaddingComponent } from '../../components/global-padding/global-padding.component';
import { BtnPrimaryComponent } from '../../components/btn-primary/btn-primary.component';
import { AboutComponent } from '../../sections/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GlobalPaddingComponent,
    BtnPrimaryComponent,
    AboutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  btnCtaClicked(){
    
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'btn-secundary',
  standalone: true,
  imports: [],
  templateUrl: './btn-secundary.component.html',
  styleUrl: './btn-secundary.component.css'
})
export class BtnSecundaryComponent {
  @Input() text: string = '';
  @Output() clicked = new EventEmitter<void>();
  
    onClick() {
      this.clicked.emit();
    }
}

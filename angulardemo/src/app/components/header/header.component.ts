import { Component, EventEmitter, Output, output } from '@angular/core';
import { EventInfoWrapper } from '@angular/core/primitives/event-dispatch';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output()
  public value =new EventEmitter<string>();

  constructor(){
  }
  ngOnInit(){
    
  }
  passData(){
    console.log("button clicked")
    this.value.emit("event binding")
  }
}

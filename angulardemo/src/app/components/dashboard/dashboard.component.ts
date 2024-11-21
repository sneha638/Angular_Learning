import { Component, ViewChild, viewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ContainerComponent } from "../container/container.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, ContainerComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
public dataToChild : string = "InputBinding"
public dataToParent : string =""

getData(str : string){
  this.dataToParent = str
}
@ViewChild(ContainerComponent,{ static : true })
containerComp! : ContainerComponent;

onClick(){
  console.log(this.containerComp.msg)
  
}
}

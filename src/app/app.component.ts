import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
//import { AboutComponent } from "./components/about/about.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: { 'ngSkipHydration': '' } 
})
export class AppComponent {
  constructor(private el: ElementRef) {}
  //@ViewChild(AboutComponent) aboutComponent!: AboutComponent;
  @HostListener('window:scroll', [])
  onScroll(): void {
    const aboutSection = this.el.nativeElement.querySelector('#about');
    const firstRow = aboutSection.querySelector('.fade-in');
    
    if (firstRow) {
      const position = firstRow.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight) {
        firstRow.style.opacity = '1';
        firstRow.style.transform = 'translateY(0)';
        //this.aboutComponent.activateProgressBars();
      }
    }
  }
  
  title = 'dicta';
}

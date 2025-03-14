import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isHidden: boolean = false;
  hasShadow: boolean = false; // Nuevo estado para la sombra
  private lastScrollTop: number = 0;
  private scrollThreshold: number = 50; // Para evitar cambios bruscos

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Ocultar navbar cuando se hace scroll hacia abajo
    if (currentScroll > this.lastScrollTop && currentScroll > this.scrollThreshold) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }

    // Agregar sombra cuando el usuario baja
    this.hasShadow = currentScroll > 10; // Si el scroll es mayor a 10px, agrega sombra

    this.lastScrollTop = currentScroll;
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

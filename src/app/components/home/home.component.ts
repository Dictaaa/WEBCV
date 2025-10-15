import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  skills: Skill[] = [];
  textoCompleto: string = "Full_Stack_Developer(){}";
  textoMostrado: string = ""; 
  velocidad: number = 100; 

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.iniciarAnimacion();
    this.skills = this.skillService.getSkills();
  }

   private async iniciarAnimacion() {
    this.textoMostrado = ""; 
    const parteAmarilla = "Full_Stack_Developer";
    const parteMorada = "(){}";

    let textoHTML = `<span class="amarillo"></span><span class="morado"></span>`;

    for (let i = 0; i <= this.textoCompleto.length; i++) {
      if (i <= parteAmarilla.length) {
        textoHTML = `<span class="amarillo">${parteAmarilla.substring(0, i)}</span><span class="morado"></span>`;
      } else {
        textoHTML = `<span class="amarillo">${parteAmarilla}</span><span class="morado">${parteMorada.substring(0, i - parteAmarilla.length)}</span>`;
      }
      this.textoMostrado = textoHTML;
      await this.delay(this.velocidad);
    }
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  abrirCorreo() {
    const destinatario = "daencovi@gmail.com";
    const asunto = "";
    const cuerpo = "";
    
    const mailto = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    
    window.location.href = mailto;
  }
}

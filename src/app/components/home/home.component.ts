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
  textoCompleto: string = "Desarrollador Full Stack";
  textoMostrado: string = ""; 
  velocidad: number = 100; 

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.iniciarAnimacion();
    this.skills = this.skillService.getSkills();
  }

  private async iniciarAnimacion() {
    this.textoMostrado = ""; 
    for (let i = 0; i < this.textoCompleto.length; i++) {
      this.textoMostrado += this.textoCompleto.charAt(i);
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

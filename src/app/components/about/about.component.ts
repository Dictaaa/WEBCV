import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills: { name: string; icon: SafeHtml; percentage: number; color: string; showProgress: boolean }[];
  showProgress = true; 
  
  constructor(private sanitizer: DomSanitizer,  private el: ElementRef) {
    this.skills = [
      {
        name: 'Angular',
        icon: this.sanitize(`
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 223 236" width="1em" height="1em"><g clip-path="url(#angular_svg__a)"><path fill="url(#angular_svg__b)" d="m222.077 39.192-8.019 125.923L137.387 0zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301zM111.039 62.675l30.357 73.803H80.681zM7.937 165.115 0 39.192 84.69 0z"></path><path fill="url(#angular_svg__c)" d="m222.077 39.192-8.019 125.923L137.387 0zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301zM111.039 62.675l30.357 73.803H80.681zM7.937 165.115 0 39.192 84.69 0z"></path></g><defs><linearGradient id="angular_svg__b" x1="49.009" x2="225.829" y1="213.75" y2="129.722" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"></stop><stop offset="0.24" stop-color="#F60A48"></stop><stop offset="0.352" stop-color="#F20755"></stop><stop offset="0.494" stop-color="#DC087D"></stop><stop offset="0.745" stop-color="#9717E7"></stop><stop offset="1" stop-color="#6C00F5"></stop></linearGradient><linearGradient id="angular_svg__c" x1="41.025" x2="156.741" y1="28.344" y2="160.344" gradientUnits="userSpaceOnUse"><stop stop-color="#FF31D9"></stop><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"></stop></linearGradient><clipPath id="angular_svg__a"><path fill="#fff" d="M0 0h223v236H0z"></path></clipPath></defs></svg>
        `),
        percentage: 100,
        color: 'bg-primary',
        showProgress: false
      },
      {
        name: 'PHP',
        icon: this.sanitize(`
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 16 16">
<path fill="#dcd5f2" d="M8,11.5c-4.065,0-7.5-1.832-7.5-4s3.435-4,7.5-4s7.5,1.832,7.5,4S12.065,11.5,8,11.5z"></path><path fill="#8b75a1" d="M8,4c4.125,0,7,1.845,7,3.5S12.125,11,8,11S1,9.155,1,7.5S3.875,4,8,4 M8,3C3.582,3,0,5.015,0,7.5 S3.582,12,8,12s8-2.015,8-4.5S12.418,3,8,3L8,3z"></path><path fill="#36404d" d="M4.525 7C4.758 7 4.924 7.076 4.98 7.147 4.99 7.16 5.017 7.194 4.989 7.312 4.901 7.681 4.826 8 3.729 8H3.634l.188-1H4.525M4.525 6H2.992l-.75 4H3.22l.188-1h.321c1.256 0 1.978-.381 2.233-1.457C6.182 6.619 5.452 6 4.525 6L4.525 6zM12.525 7c.233 0 .399.076.455.147.01.013.037.047.009.165C12.901 7.681 12.826 8 11.729 8h-.094l.188-1H12.525M12.525 6h-1.534l-.75 4h.978l.188-1h.321c1.256 0 1.978-.381 2.233-1.457C14.182 6.619 13.452 6 12.525 6L12.525 6z"></path><g><path fill="#36404d" d="M9.689,6.242C9.5,6.07,9.168,6,8.673,6H8.044l0.258-1H7.295L6.459,9h1.019l0.39-2h0.176h0.629 C8.742,7,8.801,7.002,8.85,7.004L8.468,9h1.04l0.348-1.926C9.93,6.692,9.874,6.412,9.689,6.242z"></path></g>
</svg>
        `),
        percentage: 90,
        color: 'bg-primary',
        showProgress: false
      }
    ];
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

   activateProgressBars(): void {
    this.skills.forEach(skill => skill.showProgress = true);
  }
}

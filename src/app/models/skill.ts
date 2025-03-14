import { SafeHtml } from "@angular/platform-browser";

export interface Skill {
  name: string;
  icon: SafeHtml;
  percentage: number;
  color: string;
}

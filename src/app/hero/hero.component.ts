import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  
  public bio: String = `A seasoned software engineer with a passion for
                crafting elegant solutions to complex problems. With extensive experience in building and scaling
                enterprise applications, I specialize in turning ambitious ideas into robust, production-ready systems
                that drive business growth.`;

  public position: String = `Senior Software Engineer`;
    

}

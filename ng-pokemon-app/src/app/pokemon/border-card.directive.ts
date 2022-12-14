import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]' //pkmn c'est juste une personnalisation, d'origine c'est appBorderCard
})
export class BorderCardDirective {
  
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#0567b7';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

@Input('pkmnBorderCard') borderColor: string; //alias, mieux car plus clair
@Input() pkmnBorderCard: string; //sans alias

@HostListener('mouseenter') onMouseEnter(){
  this.setBorder(this.borderColor || this.defaultColor);
}

@HostListener('mouseleave') onMouseLeave(){
  this.setBorder(this.initialColor);
}

  private setBorder(color: string){
    this.el.nativeElement.style.border = "solid 4px" + color;
  }
  private setHeight(height: number){
    this.el.nativeElement.style.height = this.defaultHeight;
  }
  private setBorderB(color: string){
    this.el.nativeElement.style.border = "dotted 4px" + color; //test pour voir si j'ai bien compris
  }
    
  

}

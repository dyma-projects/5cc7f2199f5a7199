import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';
@Directive({
    selector: '[appColor]'
})
export class ColorDirective implements OnInit {
    public dynColor: string = 'black'; 
    
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit(){

    }
 
    @HostListener('window:keydown', ['$event']) KeyboardEvent(event: KeyboardEvent) {     
        if (event.key === 'ArrowRight'){
            this.dynColor = 'red';
            console.log(event.key, this.dynColor)
        } else if (event.key === 'ArrowLeft') {
            this.dynColor = 'blue'
        } else if (event.key === 'ArrowDown') {
            this.dynColor = 'purple'
        } else if (event.key === 'ArrowUp') {
            this.dynColor = 'green'
        }
        this.renderer.setStyle(this.el.nativeElement, 'color', this.dynColor)        
    }    
}
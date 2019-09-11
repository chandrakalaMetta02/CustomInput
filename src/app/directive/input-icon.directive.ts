import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appInputIcon]'
})
export class InputIconDirective {

  @Input() icon;
  constructor(private el: ElementRef,private renderer: Renderer) { 
    // el.nativeElement
   
  }
  ngOnInit(){
    let parentnode=this.el.nativeElement.parentNode;
    let ele=document.createElement("i");
    ele.setAttribute('class',this.icon);
    this.renderer.setElementStyle(ele, 'right', '7px'); 
    this.renderer.setElementStyle(ele, 'position', 'absolute'); 
    this.renderer.setElementStyle(ele, 'top', '8px'); 
    this.renderer.setElementStyle(ele, 'color', 'orange'); 
    // el.nativeElement.appendChild(ele);
    parentnode.insertBefore(ele,this.el.nativeElement);
  }
  
}

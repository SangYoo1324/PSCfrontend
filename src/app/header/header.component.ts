import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @ViewChild('navBarToggler') navBarToggler!: ElementRef;
  handleCustomEvent(){
    // collapsed인 경우에만 화면 아무데나 클릭 시 닫히도록
    if(this.navBarToggler.nativeElement && !this.navBarToggler.nativeElement.classList.contains('collapsed')){
      console.log("navBarToggler 클릭으로 navBar이 닫힙니다");
      this.navBarToggler.nativeElement.click();
    }
  }
}

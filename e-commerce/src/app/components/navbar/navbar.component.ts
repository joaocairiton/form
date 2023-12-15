import { Component, HostListener, Input } from '@angular/core';
import { userItems } from './nav-dummy-data';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  userItems = userItems;

  getNavClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen'
    }
    return styleClass;
  }
 
}

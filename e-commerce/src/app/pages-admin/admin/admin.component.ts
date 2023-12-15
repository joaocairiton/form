import { Component, Input, OnInit } from '@angular/core';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

 // @Input() collapsed = false;
 // @Input() screenWidth = 0;

isSideNavCollapsed = false;
 screenWidth = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

/*getAdminClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'admin-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'admin-md-screen'
    }
    return styleClass;
  }*/
}

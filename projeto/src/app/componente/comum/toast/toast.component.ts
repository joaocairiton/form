import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {


  @Input() showToast: boolean = false;
  @Input() title: string = 'Toast Title';
  @Input() message: string = '';
  @Output() onClose = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.hideToast();
    }, 3000);
  }



  hideToast() {
    this.showToast = false;
    this.onClose.emit();
  }
}

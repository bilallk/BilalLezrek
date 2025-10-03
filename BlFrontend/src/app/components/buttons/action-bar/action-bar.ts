import { Component, Input } from '@angular/core';
import { ActionButton } from '../action-button/action-button';

@Component({
  selector: 'app-action-bar',
  imports: [ActionButton],
  templateUrl: './action-bar.html',
  styleUrl: './action-bar.scss'
})
export class ActionBar {
  @Input() id!: number;
  @Input() visit: boolean = false;
  @Input() edit: boolean = false;
  @Input() disable: boolean = false;
  @Input() delete: boolean = false;

  buttons: any[] = [];

  ngOnChanges() {
    this.buttons = [
      { label: 'Visit', color: 'var(--mat-sys-on-primary)', hidden: !this.visit, 
        onClick: () => 
          console.log('Visit clicked') 
      },
      { label: 'Edit',  color: 'var(--mat-sys-on-primary)', hidden: !this.edit,  
        onClick: () => 
          console.log('Edit clicked') 
      },
      { label: 'Disable', color: '#fd2626ff', hidden: !this.disable, 
        onClick: () => 
          console.log('Disable clicked') 
      },
      { label: 'Delete',  color: '#fd2626ff', hidden: !this.delete,  
        onClick: () => 
        console.log('Delete clicked') 
      }
    ];
  }
}

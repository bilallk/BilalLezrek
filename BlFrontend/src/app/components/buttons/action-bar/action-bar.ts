import { Component } from '@angular/core';
import { ActionButton } from '../action-button/action-button';

@Component({
  selector: 'app-action-bar',
  imports: [ActionButton],
  templateUrl: './action-bar.html',
  styleUrl: './action-bar.scss'
})
export class ActionBar {
  buttons = [
    {
      label: 'Visit', color: 'var(--mat-sys-on-primary)', disabled: false, onClick: () => {
        console.log('Visit clicked');
      } },
    {
      label: 'Edit', color: 'var(--mat-sys-on-primary)', disabled: false, onClick: () => {
        console.log('Visit clicked');
      } },
    {
      label: 'Disable', color: '#fd2626ff', disabled: false, onClick: () => {
        console.log('Disable clicked');
      } },
    {
      label: 'Delete', color: '#fd2626ff', disabled: false, onClick: () => {
        console.log('Delete clicked');
      } 
    }];           
}

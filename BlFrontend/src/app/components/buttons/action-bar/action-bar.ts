import { Component, inject, Input } from '@angular/core';
import { ActionButton } from '../action-button/action-button';
import { Observable } from 'rxjs';
import { Feature } from '../../../models/feature';
import { HttpClient } from '@angular/common/http';
import { FeatureService } from '../../../service/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-bar',
  imports: [ActionButton],
  templateUrl: './action-bar.html',
  styleUrl: './action-bar.scss'
})
export class ActionBar {
  @Input() id!: number;
  @Input() visit: boolean = true;
  @Input() edit: boolean = true;
  @Input() disable: boolean = true;
  @Input() enable: boolean = true;
  @Input() delete: boolean = true;

  buttons: any[] = [];
  private http = inject(HttpClient);
  private router = inject(Router);
  features$!: Observable<Feature[]>;
  private featureService = inject(FeatureService);

  ngOnChanges() {
    
    this.buttons = [
      { label: 'Visit', color: 'var(--mat-sys-on-primary)', hidden: !this.visit, 
        onClick: () => 
          this.visitButton(this.id)
      },
      { label: 'Edit',  color: 'var(--mat-sys-on-primary)', hidden: !this.edit,  
        onClick: () => 
          this.editButton(this.id)  
      },
      { label: 'Disable', color: '#fd2626ff', hidden: !this.disable, 
        onClick: () => 
          this.toggleButton(this.id)  
      },
      { label: 'Enable', color: '#16b916ff', hidden: !this.enable, 
        onClick: () => 
          this.toggleButton(this.id)  
      },
      { label: 'Delete',  color: '#fd2626ff', hidden: !this.delete,  
        onClick: () => 
        this.deleteButton(this.id)  
      }
    ];
  }

  visitButton(id: number) {
    this.router.navigate(['/feature', id]);
  }
  editButton(id: number) {
    console.log(`Edit button clicked for item with id: ${id}`);
  }
  toggleButton(id: number) {
     this.featureService.toggleAvailability(id).subscribe({
      next: () => console.log(`Feature ${id} toggled successfully`),
      error: err => console.error('Toggle error:', err)
    });
  }
  deleteButton(id: number) {
    this.featureService.delete(id).subscribe({
      next: () => console.log(`Feature ${id} deleted successfully`),
      error: err => console.error('Toggle error:', err)
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';

@NgModule({
  declarations: [MaintenanceComponent],
  exports: [MaintenanceComponent],
  imports: [CommonModule]
})
export class MaintenanceModule {}

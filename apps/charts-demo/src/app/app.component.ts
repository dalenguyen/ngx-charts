import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsComponent } from '@dalenguyen/ngx-charts';

@Component({
  standalone: true,
  imports: [RouterModule, NgxChartsComponent],
  selector: 'dalenguyen-root',
  template: `<dngx />`,
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  title = 'charts-demo';
}

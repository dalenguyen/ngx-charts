import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsComponent } from '@dalenguyen/ngx-charts';
import { DngxLineComponent } from '@dalenguyen/ngx-charts/line';

@Component({
  standalone: true,
  imports: [RouterModule, DngxLineComponent],
  selector: 'dalenguyen-root',
  template: `<dngx-line [data]="data" />`,
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent {
  title = 'charts-demo';

  data = [
    {
      value: 20,
      date: '2020-05-12T12:19:00+00:00',
    },
    {
      value: 50,
      date: '2020-05-14T12:19:00+00:00',
    },
    {
      value: 30,
      date: '2020-05-16T12:19:00+00:00',
    },
    {
      value: 80,
      date: '2020-05-18T12:19:00+00:00',
    },
    {
      value: 55,
      date: '2020-05-20T12:19:00+00:00',
    },
    {
      value: 60,
      date: '2020-05-22T12:19:00+00:00',
    },
    {
      value: 45,
      date: '2020-05-24T12:19:00+00:00',
    },
    {
      value: 30,
      date: '2020-05-26T12:19:00+00:00',
    },
    {
      value: 40,
      date: '2020-05-28T12:19:00+00:00',
    },
    {
      value: 70,
      date: '2020-05-30T12:19:00+00:00',
    },
    {
      value: 63,
      date: '2020-06-01T12:19:00+00:00',
    },
    {
      value: 40,
      date: '2020-06-03T12:19:00+00:00',
    },
    {
      value: 50,
      date: '2020-06-05T12:19:00+00:00',
    },
    {
      value: 75,
      date: '2020-06-07T12:19:00+00:00',
    },
    {
      value: 20,
      date: '2020-06-09T12:19:00+00:00',
    },
    {
      value: 50,
      date: '2020-06-11T12:19:00+00:00',
    },
    {
      value: 80,
      date: '2020-06-13T12:19:00+00:00',
    },
    {
      value: 75,
      date: '2020-06-15T12:19:00+00:00',
    },
    {
      value: 82,
      date: '2020-06-17T12:19:00+00:00',
    },
    {
      value: 55,
      date: '2020-06-19T12:19:00+00:00',
    },
    {
      value: 35,
      date: '2020-06-21T12:19:00+00:00',
    },
    {
      value: 34,
      date: '2020-06-23T12:19:00+00:00',
    },
    {
      value: 45,
      date: '2020-06-25T12:19:00+00:00',
    },
    {
      value: 58,
      date: '2020-06-27T12:19:00+00:00',
    },
    {
      value: 34,
      date: '2020-06-29T12:19:00+00:00',
    },
    {
      value: 60,
      date: '2020-07-01T12:19:00+00:00',
    },
    {
      value: 75,
      date: '2020-07-03T12:19:00+00:00',
    },
    {
      value: 80,
      date: '2020-07-05T12:19:00+00:00',
    },
    {
      value: 29,
      date: '2020-07-07T12:19:00+00:00',
    },
    {
      value: 40,
      date: '2020-07-09T12:19:00+00:00',
    },
    {
      value: 54,
      date: '2020-07-11T12:19:00+00:00',
    },
    {
      value: 67,
      date: '2020-07-13T12:19:00+00:00',
    },
    {
      value: 90,
      date: '2020-07-15T12:19:00+00:00',
    },
    {
      value: 84,
      date: '2020-07-17T12:19:00+00:00',
    },
    {
      value: 43,
      date: '2020-07-19T12:19:00+00:00',
    },
  ];
}

import {
  Component,
  ElementRef,
  OnChanges,
  SimpleChanges,
  inject,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  timeFormatLocale,
  axisBottom,
  axisLeft,
  scaleLinear,
  scaleTime,
  select,
  timeFormat,
  extent,
  line,
  curveMonotoneX,
  max,
  min,
  utcFormat,
} from 'd3';

@Component({
  selector: 'dngx-line',
  standalone: true,
  imports: [CommonModule],
  template: `<figure class="dngx-line"></figure>`,
})
export class DngxLineComponent implements OnChanges {
  chartEl = inject(ElementRef);

  data = input.required<{ value: number; date: string }[]>();

  private width = 700;
  private height = 700;
  private margin = 50;
  public svg: any;
  public svgInner: any;
  public yScale: any;
  public xScale: any;
  public xAxis: any;
  public yAxis: any;
  public lineGroup: any;

  ngOnChanges(changes: SimpleChanges): void {
    // eslint-disable-next-line no-prototype-builtins
    if (changes.hasOwnProperty('data') && this.data) {
      console.log(this.data);

      this.initializeChart();
      this.drawChart();

      window.addEventListener('resize', () => this.drawChart());
    }
  }

  private initializeChart() {
    this.svg = select(this.chartEl.nativeElement)
      .select('.dngx-line')
      .append('svg')
      .attr('height', this.height);

    this.svgInner = this.svg
      .append('g')
      .style(
        'transform',
        'translate(' + this.margin + 'px, ' + this.margin + 'px)'
      );

    this.yScale = scaleLinear()
      .domain([
        max(this.data(), (d) => d.value) || 0 + 1,
        min(this.data(), (d) => d.value) || 0 - 1,
      ])
      .range([0, this.height - 2 * this.margin]);

    this.yAxis = this.svgInner
      .append('g')
      .attr('id', 'y-axis')
      .style('transform', 'translate(' + this.margin + 'px,  0)');

    if (this.data().length) {
      this.xScale = scaleTime().domain(
        // @ts-expect-error:next-line
        extent(this.data(), (d) => new Date(d.date))
      );
    }

    this.xAxis = this.svgInner
      .append('g')
      .attr('id', 'x-axis')
      .style(
        'transform',
        'translate(0, ' + (this.height - 2 * this.margin) + 'px)'
      );

    this.lineGroup = this.svgInner
      .append('g')
      .append('path')
      .attr('id', 'line')
      .style('fill', 'none')
      .style('stroke', 'red')
      .style('stroke-width', '2px');
  }

  private drawChart(): void {
    this.width = this.chartEl.nativeElement.getBoundingClientRect().width;
    this.svg.attr('width', this.width);

    this.xScale.range([this.margin, this.width - 2 * this.margin]);

    const xAxis = axisBottom(this.xScale).ticks(10);

    this.xAxis.call(xAxis);

    const yAxis = axisLeft(this.yScale);

    this.yAxis.call(yAxis);

    const lineChart = line()
      .x((d) => d[0])
      .y((d) => d[1])
      .curve(curveMonotoneX);

    const points: [number, number][] = this.data().map((d) => [
      this.xScale(new Date(d.date)),
      this.yScale(d.value),
    ]);

    this.lineGroup.attr('d', lineChart(points));
  }
}

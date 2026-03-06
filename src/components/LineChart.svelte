<script>
  import { onMount } from 'svelte';
  import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    TimeScale,
    Tooltip,
    Filler
  } from 'chart.js';
  import 'chartjs-adapter-date-fns';

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    TimeScale,
    Tooltip,
    Filler
  );

  export let labels = ['2022-06-09','2022-08-18','2023-06-13','2023-08-23','2024-03-14','2024-05-20','2024-06-21','2024-08-26','2024-10-13','2025-01-14','2025-02-23','2025-03-01','2025-12-04','2025-12-30','2026-02-24'];
  export let data = [94.5,98.2,102.6,102.2,95.0,94.6,95.0,94.0,94.2,96.6,95.0,93.1,95.0,89.1,90.2];
  export let label = 'Data';

  let canvas;
  let chart;

  onMount(() => {
    const primary = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary')
      .trim();
    const alternative = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-alternative')
      .trim();

    const points = labels.map((l, i) => ({ x: l, y: data[i] }));

    chart = new Chart(canvas, {
      type: 'line',
      data: {
        datasets: [
          {
            label,
            data: points,
            borderColor: primary,
            backgroundColor: alternative + '22',
            pointBackgroundColor: primary,
            pointRadius: 4,
            tension: 0.35,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: true,
            callbacks: {
              title: (items) => items[0].raw.x
            }
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'month',
              displayFormats: { month: 'yyyy-MM' }
            },
            ticks: {
              color: primary,
              autoSkip: true,
              maxTicksLimit: Math.ceil(labels.length / 2)
            },
            grid: { color: alternative + '33' }
          },
          y: {
            ticks: { display: false },
            grid: { color: alternative + '33' },
            beginAtZero: true
          }
        }
      }
    });

    return () => chart.destroy();
  });
</script>

<div class="line-chart-wrapper">
  <canvas bind:this={canvas}></canvas>
</div>

<style>
  .line-chart-wrapper {
    width: 100%;
    height: 200px;
  }
</style>

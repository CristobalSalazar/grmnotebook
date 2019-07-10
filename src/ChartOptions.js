module.exports = function () {
  this.bar = {
    grid: {
      borderColor: "#444",
      row: {
        opacity: 0.01
      }
    },
    title: {
      text: "Sample Chart",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "24px",
        color: "#fff"
      }
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      followCursor: false,
      fillSeriesColor: false,
      theme: 'dark',
      style: {
        fontSize: '12px',
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
      x: {
        show: true,
      },
      marker: {
        show: true,
      },
      items: {
        display: 'flex',
      },
      fixed: {
        enabled: false,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0,
      },
    },
    markers: {
      size: 5,
      strokeColors: '#fff',
      strokeWidth: 0,
      strokeOpacity: 0.9,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      hover: {
        size: undefined,
        sizeOffset: 1.666
      }
    },
    chart: {
      toolbar: {
        show: false
      },
      animations: {
        enabled: false,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: false,
          speed: 350
        }
      }
    },
    stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 3,
      dashArray: 0,
    },
    xaxis: {
      type: "date",
      categories: [],
      axisBorder: {
        show: true
      },
      labels: {
        style: {
          colors: "#f1f1f1"
        }
      }
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      fontSize: '12px',
      fontFamily: 'Helvetica, Arial',
      width: undefined,
      height: undefined,
      formatter: undefined,
      offsetX: 0,
      offsetY: -12,
      labels: {
        colors: ['#e1e1e1'],
        useSeriesColors: false
      },
    },
    yaxis: {
      show: true,
      labels: {
        formatter: function (val) {
          return '$' + val.toFixed(2)
        },
        style: {
          color: "#f1f1f1"
        }
      }
    }
  }
}
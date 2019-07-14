module.exports = function () {
  this.bar = {
    // --- TITLE ---
    title: {
      text: "",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontFamily: 'Tahoma',
        fontSize: '32px',
        color: '#428bca'
      }
    },
    // --- SUBTITLE ---
    subtitle: {
      text: "",
      align: "right",
      margin: 0,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "14px",
        color: "#aaa"
      }
    },
    // --- GRID ---
    grid: {
      show: true,
      borderColor: "#333",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      row: {
        opacity: 0
      },
      column: {
        opacity: 0
      }
    },
    // --- TOOLTIP ---
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      followCursor: false,
      fillSeriesColor: false,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: "monospace"
      },
      onDatasetHover: {
        highlightDataSeries: true
      },
      x: {
        show: true
      },
      marker: {
        show: true
      },
      items: {
        display: "flex"
      },
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0
      }
    },
    // --- MARKERS ---
    markers: {
      size: 5,
      strokeColors: "#fff",
      strokeWidth: 0,
      strokeOpacity: 0,
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
    /// --- CHART ---
    chart: {
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.5
      },
      animations: {
        enabled: false,
        easing: "easeinout",
        speed: 200,
        animateGradually: {
          enabled: false,
          delay: 0
        },
        dynamicAnimation: {
          enabled: false,
          speed: 200
        }
      }
    },
    // --- STROKE ---
    stroke: {
      show: true,
      curve: "straight",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0
    },
    // --- XAXIS ---
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: "#f1f1f1",
          fontSize: "14px",
          fontFamily: "monospace"
        }
      },
      tooltip: {
        style: {
          fontFamily: "monospace",
          fontSize: "14px"
        }
      },
      axisBorder: {
        show: false
      },
      tickPlacement: "on",
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#fff',
        height: 3,
        offsetX: 0,
        offsetY: 1
      },
    },
    // -- YAXIS ---
    yaxis: {
      show: true,
      labels: {
        formatter: function (val) {
          if (val) {
            return "$" + val.toFixed(2);
          }
        },
        style: {
          color: "#f1f1f1",
          fontSize: "14px",
          fontFamily: "monospace"
        }
      }
    },
    // --- LEGEND ---
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "top",
      horizontalAlign: "right",
      floating: false,
      fontSize: "16px",
      fontFamily: "monospace",
      width: undefined,
      height: undefined,
      formatter: undefined,
      offsetX: 0,
      offsetY: -24,
      labels: {
        colors: ["#e1e1e1"],
        useSeriesColors: true
      }
    }
  };
};
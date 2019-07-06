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
      followCursor: false,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined
      },
      onDatasetHover: {
        highlightDataSeries: true
      },
      marker: {
        show: false
      }
    },
    theme: {},
    chart: {
      background: "(0,0,0,0)",
      toolbar: {
        show: false
      }
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
    yaxis: {
      show: true,

      labels: {
        style: {
          color: "#f1f1f1"
        }
      }
    }
  }
}
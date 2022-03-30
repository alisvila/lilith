import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import jalali from "moment-jalaali";

// The wrapper exports only a default component that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props) and
// RefObject interface (HighchartsReact.RefObject). All other interfaces
// like Options come from the Highcharts module itself.

const points: Array<any> = [];
const series: Array<any> = [];
const categories: Array<any> = [];
const threeDay = 260000000;
const oneMonth = 4717440000;

const options: any = {
  credits: {
    enabled: false,
  },
  yAxis: {
    title: 'dd'
  },
  chart: {
    type: "spline",
    style: {
      fontFamily: "shabnam",
    },
  },
  tooltip: {
    shared: true,
    crosshairs: true,
    borderRadius: 10,
    useHTML: true,
    rtl: true,
    formatter: function(this: any): any {
      var s: any = "<div style='text-align: center'><span>" + jalali(this.x).format("jYYYY/jMM/jDD") + "</span><br>"
      this.points.map((point: any) => {
        s += `<div><b>${point.y} </b><span>kg</span><div><br> `
      })
      s += "</div>"
      return s;
    }
  },
  legend: {
    enabled: false,
    rtl: true,
    verticalAlign: "top",
  },
  title: {
    style: {
      display: "none",
    },
  },
  xAxis: {
    labels: {
      formatter: function(this: any) {
        return (jalali(this.value).format("jYYYY/jMM/jDD"))
      }
    }
  },
  series: [
    {
      data: [
        [1, 5],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 6],
        [6, 12],
      ],
    },
  ],
};

// React supports function components as a simple way to write components that
// only contain a render method without any state (the App component in this
// example).

export const Highchart = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

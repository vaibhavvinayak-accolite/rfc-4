import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

FusionCharts.options.license({
  key: "3lB2lsF-11E1G4E1E3B6A4C3B2C1C4B3I4H-7lfB5B2kocctA1A4gqbE2F4D1F3C8B5E5E3D3B2G3A15A11B14A8D8uddH4C2B2lA7C8A3ag1wH2C2C5qD-17jD2E2F1qkiB8C2C7D3F4E2C3A1B8A7A5nf1g1D3G2KB5tpgC2A1E2B-7mA3FD4E1F-10F-10tG4B1B11B3D3F3C2E4A1A1D3A1A2E5r==",
  creditLabel: false,
});

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "column2d",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion",
    },
    data: [
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
    ],
  },
};

const Column2d = () => <ReactFC {...chartConfigs} />;

export default Column2d;

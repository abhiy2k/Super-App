import Plot from 'react-plotly.js'
export const PlotGraph = ({xdata, ydata, symbol, lineColor}) => {
const xsidedata = {xdata};
const ysidedata = {ydata};
return (<Plot
        data={[
          {
            x: xsidedata,
            y: ysidedata,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color : `${lineColor}`},
          },
        ]}
        layout={ {width: 720, height: 400, title: `Stock plot of ${symbol}`} }
      />);
}

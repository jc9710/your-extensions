/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import Point from "esri/geometry/Point";
import { TextInput, Label } from 'jimu-ui'


export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
  state = {
    jimuMapView: null,
    latitude: "",
    longitude: "",
    height: "",
    length: "",
    width: "",
    weight: ""
  };

  activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      this.setState({
        jimuMapView: jmv
      });

      jmv.view.on("pointer-move", (evt) => {
        const point: Point = this.state.jimuMapView.view.toMap({
          x: evt.x,
          y: evt.y
        });
        this.setState({
          latitude: point.latitude.toFixed(3),
          longitude: point.longitude.toFixed(3)
        });
      });
    }
  };

  render() {
    return <div className="widget-starter jimu-widget">
      {this.props.hasOwnProperty("useMapWidgetIds") &&
         this.props.useMapWidgetIds &&
         this.props.useMapWidgetIds[0] && (
           <JimuMapViewComponent
             useMapWidgetId={this.props.useMapWidgetIds?.[0]}
             onActiveViewChange={this.activeViewChangeHandler}
           />
         )
       }
      <label>
          Vehicle Height:{' '}
          <TextInput
            className="mb-3"
            placeholder="Enter height (m)..."
          />
        </label>
        <label>
          Vehicle Length:{' '}
          <TextInput
            className="mb-3"
            placeholder="Enter length (m)..."
          />
        </label>
        <label>
          Vehicle Width:{' '}
          <TextInput
            className="mb-3"
            placeholder="Enter width (m)..."
          />
        </label>
        <label>
          Vehicle Weight:{' '}
          <TextInput
            className="mb-3"
            placeholder="Enter weight (kg)..."
          />
        </label>
        <button onClick={this.query}>Update Route</button>
    </div>;
  }
}
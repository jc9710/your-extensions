/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import Point from "esri/geometry/Point";
import { TextInput, Label } from 'jimu-ui'


export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
  state = {
    height: "",
    length: "",
    width: "",
    weight: ""
  };

  render() {
    return <div className="widget-starter jimu-widget">
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
        <button type="button" onClick={this.query}>Update Route</button>
    </div>;
  }
}
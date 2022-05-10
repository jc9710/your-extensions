import {React, Immutable, FormattedMessage} from 'jimu-core';
import {AllWidgetSettingProps} from 'jimu-for-builder';
import {DataSourceTypes} from 'jimu-arcgis';
import {SettingSection, SettingRow} from 'jimu-ui/advanced/setting-components';
import {DataSourceSelector} from 'jimu-ui/advanced/data-source-selector';
import {IMConfig} from '../config';
import defaultI18nMessages from './translations/default'

export default class Setting extends React.PureComponent{
  supportedTypes = Immutable([DataSourceTypes.WebMap]);

  onDataSourceSelected = (useDataSources: UseDataSource[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    });
  }

  onP1Change = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('p1', evt.currentTarget.value)
    });
  }

  onP2Change = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('p2', evt.currentTarget.value)
    });
  }
  
render(){
  return <div className="sample-map-view-setting p-2">
    <DataSourceSelector
      types={this.supportedTypes}
      mustUseDataSource
      useDataSources={this.props.useDataSources}
      onChange={this.onDataSourceSelected}
      widgetId={this.props.id}
    />
    <SettingSection>
      <SettingRow label={<FormattedMessage id="p1" defaultMessage={defaultI18nMessages.p1}/>}> <input defaultValue={this.props.config.p1} onChange={this.onP1Change}/></SettingRow>
      <SettingRow label={<FormattedMessage id="p2" defaultMessage={defaultI18nMessages.p2}/>}> <input defaultValue={this.props.config.p2} onChange={this.onP2Change}/></SettingRow>
    </SettingSection>
  </div>
}
}
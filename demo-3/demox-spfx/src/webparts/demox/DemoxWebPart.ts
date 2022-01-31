import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'DemoxWebPartStrings';

/** Include Angular Elements JS and Style */
import 'demox/dist/demox/main';
import 'demox/dist/demox/polyfills';
require('demox/dist/demox/styles.css');

export interface IDemoxWebPartProps {
  description: string;
}

export default class DemoxWebPart extends BaseClientSideWebPart<IDemoxWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-demox-web-part description="${ this.properties.description }"></app-demox-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

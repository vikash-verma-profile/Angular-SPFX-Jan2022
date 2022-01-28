import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'SampleWebPartStrings';

/** Include Angular Elements JS and Style */
import 'sample/dist/sample/main';
import 'sample/dist/sample/polyfills';
require('sample/dist/sample/styles.css');

export interface ISampleWebPartProps {
  description: string;
}

export default class SampleWebPart extends BaseClientSideWebPart<ISampleWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-sample-web-part description="${ this.properties.description }"></app-sample-web-part>`;
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

import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'HjWebPartStrings';

import 'hj/dist/hj/bundle.js';

export interface IHjWebPartProps {
  description: string;
}

export default class HjWebPart extends BaseClientSideWebPart<IHjWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-hj-web-part description="${ this.properties.description }"></app-hj-web-part>`;
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

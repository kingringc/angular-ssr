import {Injectable, Inject} from '@angular/core';

const domino = require('domino');

import {TemplateDocument, RequestUri} from './tokens';

@Injectable()
export class DomContext {
  private windowRef: Window;

  constructor(
    @Inject(TemplateDocument) templateDocument: string,
    @Inject(RequestUri) requestUri: string
  ) {
    this.windowRef = domino.createWindow(templateDocument, requestUri);
  }

  get window(): Window {
    return this.windowRef;
  }

  get document(): Document {
    return this.windowRef.document;
  }
}
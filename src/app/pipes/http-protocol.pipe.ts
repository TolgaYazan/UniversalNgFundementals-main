import { Pipe, PipeTransform } from '@angular/core';

export enum ProtocolTypes {
  http = 'http',
  https = 'https',
  ws = 'ws',
  tcp = 'tcp',
}

@Pipe({
  name: 'httpProtocol',
})
export class HttpProtocolPipe implements PipeTransform {
  transform(value: string, protocolType: ProtocolTypes): unknown {
    switch (protocolType) {
      case ProtocolTypes.http:
        return `http://www.${value}`;
      case ProtocolTypes.https:
        return `https://www.${value}`;
      default:
        break;
    }

    return value;
  }

  // https
  // http
  // ws
  // tcp
  // a.org
}

import { HttpProtocolPipe } from './http-protocol.pipe';

describe('HttpProtocolPipe', () => {
  it('create an instance', () => {
    const pipe = new HttpProtocolPipe();
    expect(pipe).toBeTruthy();
  });
});

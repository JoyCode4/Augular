import { CustomPipePipe } from './custompipe.pipe';

describe('CustomPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipePipe();
    expect(pipe).toBeTruthy();
  });
});

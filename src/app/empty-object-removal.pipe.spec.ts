import { EmptyObjectRemovalPipe } from './empty-object-removal.pipe';

describe('EmptyObjectRemovalPipe', () => {
  it('create an instance', () => {
    const pipe = new EmptyObjectRemovalPipe();
    expect(pipe).toBeTruthy();
  });
});

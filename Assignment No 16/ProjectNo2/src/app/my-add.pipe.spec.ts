import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  const pipe = new MyAddPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add two numbers', () => {
    expect(pipe.transform(5, 10)).toEqual(15);
  });
});
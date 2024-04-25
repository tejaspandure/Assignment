import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  const pipe = new MarvellousChkPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should detect prime numbers correctly', () => {
    expect(pipe.transform(5, 'prime')).toEqual('Prime');
    expect(pipe.transform(4, 'prime')).toEqual('Not Prime');
  });

  it('should detect perfect numbers correctly', () => {
    expect(pipe.transform(28, 'perfect')).toEqual('Perfect');
    expect(pipe.transform(5, 'perfect')).toEqual('Not Perfect');
  });

  it('should detect even numbers correctly', () => {
    expect(pipe.transform(4, 'even')).toEqual('Even');
    expect(pipe.transform(5, 'even')).toEqual('Odd');
  });

  it('should detect odd numbers correctly', () => {
    expect(pipe.transform(3, 'odd')).toEqual('Odd');
    expect(pipe.transform(2, 'odd')).toEqual('Even');
  });
});
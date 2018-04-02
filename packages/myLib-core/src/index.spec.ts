import MyLib from './index';

test('Should register all components when installed', () => {
  const component = jest.fn();
  const Vue = { component };

  MyLib.install(Vue);

  // Test if a particular component was registered
  expect(component).toBeCalledWith('FooBar', expect.any(Object));
  expect(component).toBeCalledWith('Button', expect.any(Object));

  // Test how many times component got registered
  const totalOfComponents = 2;
  expect(component).toHaveBeenCalledTimes(totalOfComponents);
});

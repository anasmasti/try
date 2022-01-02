export function TestDesorator(config: any) {
  const result = (target: any) => {
    target.prototype.constructor.prototype.testValue = config.name;
  };

  return result;
}

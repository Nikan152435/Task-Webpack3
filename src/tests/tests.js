import checkHealthStatus from './healthIndicator';

describe('Health Indicator', () => {
  it('should return "healthy" if health is more than 50', () => {
    const character = { name: 'Маг', health: 90 };
    const result = checkHealthStatus(character);
    expect(result).toBe('healthy');
  });

  it('should return "wounded" if health is between 15 and 50', () => {
    const character = { name: 'Маг', health: 30 };
    const result = checkHealthStatus(character);
    expect(result).toBe('wounded');
  });

  it('should return "critical" if health is less than 15', () => {
    const character = { name: 'Маг', health: 10 };
    const result = checkHealthStatus(character);
    expect(result).toBe('critical');
  });
});
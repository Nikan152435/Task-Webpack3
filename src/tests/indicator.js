function checkHealthStatus(character) {
    const { health } = character;
    if (health > 50) {
      return 'healthy';
    } else if (health >= 15) {
      return 'wounded';
    } else {
      return 'critical';
    }
  }
  
  export default checkHealthStatus;
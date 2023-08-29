const Spacecraft =  require('./spacecraft');

test("return true if initial position of spacecraft is right",()=>{
    const sc = new Spacecraft();
    expect(sc.getPosition()).toEqual([0,0,0]);
    expect(sc.getDirection()).toBe('N');
});

test('return true if spacecraft moved  forward', () => {
    const scf = new Spacecraft();
    scf.translateCommands(['f']);
    expect(scf.getPosition()).toEqual([0, 1, 0]);
    expect(scf.getDirection()).toBe('N')
  });

  test('return true if spacecraft rotate right', () => {
    const scr = new Spacecraft();
    scr.translateCommands(['r']); 
    expect(scr.getDirection()).toBe('E');
  });

  test('return true if spacecraft moved up', () => {
    const scu = new Spacecraft();
    scu.translateCommands(['u']);
    expect(scu.getPosition()).toEqual([0, 0, 1]);
  });
  
  test('return true if spacecraft moved back', () => {
    const scb = new Spacecraft();
    scb.translateCommands(['b']);
    expect(scb.getPosition()).toEqual([0, -1, 0]);
  });
  
  test('return true if spacecraft rotate left', () => {
    const scl = new Spacecraft();
    scl.translateCommands(['l']);
    expect(scl.getDirection()).toBe('W');
  });
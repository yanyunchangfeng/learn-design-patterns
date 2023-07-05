class CPU {
  startup() {
    console.log('open CPU');
  }
  shutdown() {
    console.log('close CPU');
  }
}
class Disk {
  startup() {
    console.log('open Disk');
  }
  shutdown() {
    console.log('close Disk');
  }
}
class Memory {
  startup() {
    console.log('open Memory');
  }
  shutdown() {
    console.log('close Memory');
  }
}

class Computer {
  cpu;
  memory;
  disk;
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.disk = new Disk();
  }
  startup() {
    this.cpu.startup();
    this.memory.startup();
    this.disk.startup();
  }
  shutdown() {
    this.cpu.shutdown();
    this.memory.shutdown();
    this.disk.shutdown();
  }
}
let computer = new Computer();
computer.startup();
computer.shutdown();

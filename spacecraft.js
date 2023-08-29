class spacecraft {
    constructor() {
      //Declaration
      this.position = [0, 0, 0];
      this.directions = ['N', 'E', 'S', 'W'];
      this.currentDirectionIndex = 0;
    }

  //making common methods for position and dircetion
    getPosition() {
      return this.position;
    }

    getDirection() {
        return this.directions[this.currentDirectionIndex];
      }

     //Commands
      translateCommands(commands) {
        for (const command of commands) {

          if (command === 'f') { //for front
            if (this.getDirection() === 'N') {
              this.position[1]++;
            } else if (this.getDirection() === 'E') {
              this.position[0]++;
            } else if (this.getDirection() === 'S') {
              this.position[1]--;
            } else if (this.getDirection() === 'W') {
              this.position[0]--;
            }
          } else if (command === 'r') { //for
            this.currentDirectionIndex = (this.currentDirectionIndex + 1) % 4;
          } else if (command === 'u') {
            this.position[2]++;
          } else if (command === 'b') {
            if (this.getDirection() === 'N') {
              this.position[1]--;
            } else if (this.getDirection() === 'E') {
              this.position[0]--;
            } else if (this.getDirection() === 'S') {
              this.position[1]++;
            } else if (this.getDirection() === 'W') {
              this.position[0]++;
            }
          } else if (command === 'l') {
            this.currentDirectionIndex = (this.currentDirectionIndex + 3) % 4;
          }
        }
      }
        
}
  
module.exports= spacecraft
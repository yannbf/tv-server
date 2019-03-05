import { execSync } from 'child_process'

const turnOnCommand = `echo "on 0" | cec-client -s`
const turnOffCommand = `echo "pow 0" | cec-client -s`
const standbyCommand = `echo "standby 0" | cec-client -s`

class CecHDMI {
  turnOn() {
    this._exec(turnOnCommand)
  }

  turnOff() {
    this._exec(turnOffCommand)
  }

  standby() {
    this._exec(standbyCommand)
  }

  _exec(command) {
    execSync(command, {stdio: 'inherit'})
  }
}

export const cecHDMI = new CecHDMI();
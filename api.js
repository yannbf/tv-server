import axios from 'axios'
import { baseApi, controller } from './consts'
import { cecHDMI } from './cec-hdmi';

class TVServer {
  // Controller related
  pauseResume() {
    return this.doControllerAction(controller.video.playPause)
  }

  toggleAmbilight() {
    return this.doControllerAction(controller.ambilightOnOff)
  }

  turnOff() {
    return this.doControllerAction(controller.standby)
  }

  skipNetflix() {
    return this.pauseResume()
      .then(() => this.doControllerAction(controller.cursor.up))
      .then(() => this.doControllerAction(controller.confirm))
  }

  doControllerAction(keyCode) {
    return axios.post(`${baseApi}/input/key`, {
      key: keyCode
    })
  }

  // Audio related
  toggleMute() {
    return this.doControllerAction(controller.audio.mute)
  }

  volumeUp() {
    return this.getVolume().then(res => {
      return this.setVolume(res.data.current + 5)
    })
  }

  volumeDown() {
    return this.getVolume().then(res => {
      return this.setVolume(res.data.current - 5)
    })
  }

  setVolume(volume) {
    return axios.post(`${baseApi}/audio/volume`, {
      muted: false,
      current: volume
    })
  }

  getVolume() {
    return axios.get(`${baseApi}/audio/volume`)
  }

  turnOn() {
    cecHDMI.turnOn()
  }
}

export const server = new TVServer()

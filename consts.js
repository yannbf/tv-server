const baseApi = 'http://192.168.178.52:1925/1'

const controller = {
  standby: 'Standby',
  colors: {
    red: 'RedColour',
    green: 'GreenColour',
    yellow: 'YellowColour',
    blue: 'BlueColour'
  },
  home: 'Home',
  audio: {
    volumeUp: 'VolumeUp',
    volumeDown: 'VolumeDown',
    mute: 'Mute'
  },
  ambilightOnOff: 'AmbilightOnOff',
  cursor: {
    up: 'CursorUp',
    down: 'CursorDown',
    left: 'CursorLeft',
    right: 'CursorRight'
  },
  confirm: 'Confirm',
  video: {
    playPause: 'PlayPause',
    pause: 'Pause',
    ff: 'FastForward',
    stop: 'Stop',
    rewind: 'Rewind'
  }
}

// Back
// Find
// Options
// Dot
// Digit0
// Digit1
// Digit2
// Digit3
// Digit4
// Digit5
// Digit6
// Digit7
// Digit8
// Digit9
// Info
// Next
// Previous
// Adjust
// WatchTV
// Viewmode
// Teletext
// Subtitle
// ChannelStepUp
// ChannelStepDown
// Source
// Record
// Online

export { baseApi, controller }

export default {
  cameraStatus: (state) => state.camera.status,
  camera: (state) => state.camera.camera,
  cameraDevices: (state) => state.camera.devices,
  micStatus: (state) => state.mic.status,
  mic: (state) => state.mic.mic,
  micDevices: (state) => state.mic.devices,
  speakerStatus: (state) => state.speaker.status,
  speaker: (state) => state.speaker.speaker,
  speakerDevices: (state) => state.speaker.devices,
};

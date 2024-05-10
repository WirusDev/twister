// import React, { useState, useEffect } from "react";

// const TextToSpeech = ({ text }: { text: string }) => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
//     null
//   );
//   const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
//   const [pitch, setPitch] = useState(1);
//   const [rate, setRate] = useState(1);
//   const [volume, setVolume] = useState(1);
//   const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

//   // Function to refresh voices
//   const refreshVoices = () => {
//     setVoices(window.speechSynthesis.getVoices());
//   };

//   useEffect(() => {
//     const synth = window.speechSynthesis;
//     const u = new SpeechSynthesisUtterance(text);

//     refreshVoices(); // Refresh the list of voices
//     window.speechSynthesis.onvoiceschanged = refreshVoices;

//     u.voice = voices[0] || null;
//     setUtterance(u);

//     return () => {
//       synth.cancel();
//       window.speechSynthesis.onvoiceschanged = null; // Remove the event listener
//     };
//   }, [text, voices]);

//   const handlePlay = () => {
//     const synth = window.speechSynthesis;

//     if (isPaused) {
//       synth.resume();
//     } else {
//       if (utterance) {
//         utterance.voice = voice;
//         utterance.pitch = pitch;
//         utterance.rate = rate;
//         utterance.volume = volume;
//         synth.speak(utterance);
//       }
//     }

//     setIsPaused(false);
//   };

//   const handlePause = () => {
//     const synth = window.speechSynthesis;

//     synth.pause();

//     setIsPaused(true);
//   };

//   const handleStop = () => {
//     const synth = window.speechSynthesis;

//     synth.cancel();

//     setIsPaused(false);
//   };

//   const handleVoiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setVoice(voices.find((v) => v.name === event.target.value) || null);
//   };

//   const handlePitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPitch(parseFloat(event.target.value));
//   };

//   const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRate(parseFloat(event.target.value));
//   };

//   const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setVolume(parseFloat(event.target.value));
//   };

//   return (
//     <div>
//       <label>
//         Voice:
//         <select value={voice?.name || ""} onChange={handleVoiceChange}>
//           {voices.map((v) => (
//             <option key={v.name} value={v.name}>
//               {v.name}
//             </option>
//           ))}
//         </select>
//       </label>

//       <br />

//       <label>
//         Pitch:
//         <input
//           type='range'
//           min='0.5'
//           max='2'
//           step='0.1'
//           value={pitch}
//           onChange={handlePitchChange}
//         />
//       </label>

//       <br />

//       <label>
//         Speed:
//         <input
//           type='range'
//           min='0.5'
//           max='2'
//           step='0.1'
//           value={rate}
//           onChange={handleRateChange}
//         />
//       </label>
//       <br />
//       <label>
//         Volume:
//         <input
//           type='range'
//           min='0'
//           max='1'
//           step='0.1'
//           value={volume}
//           onChange={handleVolumeChange}
//         />
//       </label>

//       <br />

//       <button onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button>
//       <button onClick={handlePause}>Pause</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// };

// export default TextToSpeech;

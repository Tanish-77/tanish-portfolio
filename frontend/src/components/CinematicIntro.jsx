
import { useEffect, useRef, useState } from "react";

export default function CinematicIntro() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const audioRef = useRef(null);
  const timersRef = useRef([]);

  function skipIntro() {
    timersRef.current.forEach(clearTimeout);
    setFinished(true);
  }

  function playTone(ctx, time, frequency, duration = 0.9) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, time);
    osc.frequency.exponentialRampToValueAtTime(
      Math.max(25, frequency * 0.48),
      time + duration
    );

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(0.32, time + 0.035);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(time);
    osc.stop(time + duration);
  }

  function playWhoosh(ctx, time) {
    const length = ctx.sampleRate;
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    }

    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    source.buffer = buffer;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(250, time);
    filter.frequency.exponentialRampToValueAtTime(5000, time + 0.7);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(0.2, time + 0.25);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.95);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start(time);
    source.stop(time + 1);
  }

  function startIntro() {
    if (started) return;
    setStarted(true);

    try {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      if (AudioContextClass) {
        const ctx = new AudioContextClass();
        audioRef.current = ctx;

        ctx.resume().then(() => {
          const now = ctx.currentTime;
          playTone(ctx, now, 60, 1.1);
          playWhoosh(ctx, now + 0.4);
          playTone(ctx, now + 2.1, 75, 0.8);
          playWhoosh(ctx, now + 3.1);
          playTone(ctx, now + 4, 48, 1.2);
        });
      }
    } catch (error) {
      console.warn("Audio unavailable", error);
    }

    timersRef.current.push(
      setTimeout(() => setFinished(true), 6500)
    );
  }

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
      if (audioRef.current) {
        audioRef.current.close().catch(() => {});
      }
    };
  }, []);

  if (finished) return null;

  return (
    <section className={`cin-intro ${started ? "cin-playing" : ""}`}>
      <div className="cin-grid" />
      <div className="cin-red-light" />
      <div className="cin-smoke cin-smoke-one" />
      <div className="cin-smoke cin-smoke-two" />

      <div className="cin-particles">
        {Array.from({ length: 32 }, (_, i) => (
          <span
            key={i}
            style={{
              "--x": `${(i * 37) % 100}%`,
              "--delay": `${(i % 8) * -0.6}s`,
            }}
          />
        ))}
      </div>

      {!started ? (
        <div className="cin-start">
          <span className="cin-kicker">A NEW EXPERIENCE</span>
          <h2>
            ENTER THE
            <br />
            <span>DEVELOPER'S WORLD</span>
          </h2>
          <button className="cin-enter" onClick={startIntro}>
            ▶ &nbsp; START INTRO WITH SOUND
          </button>
          <button className="cin-skip" onClick={skipIntro}>
            Skip intro
          </button>
        </div>
      ) : (
        <div className="cin-sequence">
          <div className="cin-laptop">
            <div className="cin-laptop-screen">
              <div className="cin-code-lines">
                <i /><i /><i /><i /><i />
              </div>
              <span className="cin-screen-glow" />
            </div>
            <div className="cin-laptop-base" />
          </div>

          <div className="cin-title cin-title-one">
            <span className="cin-small-label">CREATIVE · TECHNICAL · BUILT TO SHIP</span>
            <h1>SOFTWARE DEVELOPER</h1>
          </div>

          <div className="cin-title cin-title-two">
            <span className="cin-small-label">WELCOME TO MY WORLD</span>
            <h1>TANISH KALOTA</h1>
            <p>REACT.JS <b>·</b> JAVASCRIPT <b>·</b> NODE.JS</p>
            <p>PYTHON <b>·</b> JAVA</p>
          </div>
        </div>
      )}

      <div className="cin-bottom-line">
        <span>TANISH KALOTA</span>
        <span>PORTFOLIO EXPERIENCE</span>
      </div>

      {started && (
        <button className="cin-skip cin-skip-playing" onClick={skipIntro}>
          Skip intro ↗
        </button>
      )}
    </section>
  );
}

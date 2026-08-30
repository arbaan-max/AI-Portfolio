import { useEffect, useRef } from 'react';

type AutoplayVideoProps = {
  src: string;
  className?: string;
  poster?: string;
  startAt?: number;
};

export function AutoplayVideo({ src, className = '', poster, startAt = 0 }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const seekToStart = () => {
      if (!startAt || video.currentTime > 0.25 || !Number.isFinite(video.duration)) {
        return;
      }

      video.currentTime = Math.min(startAt, Math.max(video.duration - 0.2, 0));
    };

    const play = () => {
      video.muted = true;
      seekToStart();
      video.play().catch(() => undefined);
    };

    const retry = window.setInterval(play, 1000);
    video.addEventListener('loadedmetadata', seekToStart, { once: true });
    document.addEventListener('click', play, { once: true });
    document.addEventListener('touchstart', play, { once: true });
    play();

    return () => {
      window.clearInterval(retry);
      video.removeEventListener('loadedmetadata', seekToStart);
      document.removeEventListener('click', play);
      document.removeEventListener('touchstart', play);
    };
  }, [startAt]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

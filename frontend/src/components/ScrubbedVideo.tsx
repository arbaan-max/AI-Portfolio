import { useEffect, useRef } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4';

export function ScrubbedVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const seekingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const seekToTarget = () => {
      if (!video.duration || seekingRef.current) {
        return;
      }

      seekingRef.current = true;
      video.currentTime = clamp(targetTimeRef.current, 0, Math.max(video.duration - 0.05, 0));
    };

    const handleSeeked = () => {
      seekingRef.current = false;
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.04) {
        seekToTarget();
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (window.innerWidth < 1024 || !video.duration) {
        return;
      }

      const previousX = prevXRef.current ?? event.clientX;
      const delta = event.clientX - previousX;
      prevXRef.current = event.clientX;

      targetTimeRef.current = clamp(
        targetTimeRef.current + (delta / window.innerWidth) * 0.8 * video.duration,
        0,
        Math.max(video.duration - 0.05, 0),
      );

      seekToTarget();
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };

    video.addEventListener('seeked', handleSeeked);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      video.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="video-fade-mask pointer-events-none absolute left-0 top-[20vh] z-0 h-[105vh] w-full overflow-hidden opacity-80 mix-blend-multiply">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        loop
        className="h-full w-full object-cover object-center"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-bg-base to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-bg-base to-transparent" />
    </div>
  );
}

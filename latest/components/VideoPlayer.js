
export default function VideoPlayer({ src, title }) {
  return (
    <video 
      width="800" 
      height="450" 
      controls 
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
      <p>Your browser doesn't support HTML5 video.</p>
    </video>
  );
}
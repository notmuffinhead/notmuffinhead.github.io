
export default function VideoPlayer({ src }) {
  return (
    <video 
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '800px'
      }}
      controls 
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
      <p>{"Your browser doesn't support HTML5 video."}</p>
    </video>
  );
}
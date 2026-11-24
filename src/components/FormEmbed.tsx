type Props = { src: string; title: string; height?: number };

export default function FormEmbed({ src, title, height = 1100 }: Props) {
  return (
    <div className="form-shell">
      <iframe
        src={src}
        width="100%"
        height={height}
        frameBorder="0"
        title={title}
        className="form-iframe"
        loading="lazy"
        allow="geolocation"
      />
      <p className="fallback">
        If the form does not load, <a href={src} target="_blank" rel="noopener noreferrer">open the form in a new tab</a>.
      </p>
    </div>
  );
}

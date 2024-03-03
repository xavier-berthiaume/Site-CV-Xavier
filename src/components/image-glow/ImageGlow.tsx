import "./ImageGlow.scss";

type ImageGlowProps = Pick<
  React.ComponentPropsWithoutRef<'img'>,
  'src' | 'alt' | 'width' | 'height'
>;

function ImageGlow (props: ImageGlowProps) {

  return (
    <div
      className="glow-image"
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
      }}
    >
      <img 
        className="cover-image"
        {...props}
      />
      <img 
        className="blur-image"
        {...props}
      />
    </div>
  );

};

export default ImageGlow;

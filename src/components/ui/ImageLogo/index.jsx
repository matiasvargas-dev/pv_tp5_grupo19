const ImageLogo = ({ src, alt, title }) => {
  return (
    <>
      <img className="logo" src={src} alt={alt} title={title} />
    </>
  );
};

export default ImageLogo;

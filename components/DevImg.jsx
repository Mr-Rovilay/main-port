const DevImg = ({ containerStyles, imgStyles, ImgSrc, alt }) => {
  return (
    <div className={containerStyles}>
      <img src={ImgSrc} alt={alt} className={imgStyles} />
    </div>
  );
};

export default DevImg;

export const Tech = () => {
  const imgStyles = {
    maxWidth: "100%",
    width: "30px",
    height: "30px",
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "0.8rem",
        alignItems: "center",
        justifyItems: "center",
        alignSelf: "center",
      }}
    >
      <img style={imgStyles} src="images/logos/htmllogo.svg" />
      <img style={imgStyles} src="images/logos/csslogo.svg" />
      <img style={imgStyles} src="images/logos/typescript.svg" />
      <img style={imgStyles} src="images/logos/reactlogo.svg" />
      <img style={imgStyles} src="images/logos/postgresql.png" />
    </div>
  );
};

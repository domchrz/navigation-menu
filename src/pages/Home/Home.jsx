import { StyledH1, StyledIcon, StyledSection } from '../../styles';

export default function Home() {
  return (
    <>
      <StyledSection>
        <StyledH1>Welcome Home</StyledH1>
        <h2>Home Page</h2>
        <p style={{ marginTop: '2rem' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          repellat minima impedit nesciunt officia, beatae, veritatis placeat
          illum nostrum sit sunt veniam? Quam quaerat magni dignissimos libero
          quidem in exercitationem?
        </p>
        <StyledIcon fontSize="5rem">home</StyledIcon>
      </StyledSection>
    </>
  );
}

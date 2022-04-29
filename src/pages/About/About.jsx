import { StyledH1, StyledIcon, StyledSection } from '../../styles';

export default function About() {
  return (
    <>
      <StyledSection>
        <StyledH1>About Us</StyledH1>
        <h2>About Page</h2>
        <p style={{ marginTop: '2rem' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          repellat minima impedit nesciunt officia, beatae, veritatis placeat
          illum nostrum sit sunt veniam? Quam quaerat magni dignissimos libero
          quidem in exercitationem?
        </p>
        <StyledIcon fontSize="5rem">help</StyledIcon>
      </StyledSection>
    </>
  );
}

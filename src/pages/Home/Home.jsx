import Card from '../../components/Card';
import { StyledH1, StyledIcon, StyledSectionCentered } from '../../styles';

export default function Home() {
  return (
    <>
      <StyledSectionCentered>
        <StyledH1>Welcome Home</StyledH1>
        <Card>
          <h2>Home Page</h2>
          <p style={{ marginTop: '2rem' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            repellat minima impedit nesciunt officia, beatae, veritatis placeat
            illum nostrum sit sunt veniam? Quam quaerat magni dignissimos libero
            quidem in exercitationem?
          </p>
          <StyledIcon fontSize="5rem">home</StyledIcon>
        </Card>
      </StyledSectionCentered>
    </>
  );
}

import PRODUCTS from '../../constants/products';
import { useParams, useHistory } from 'react-router-dom';
import { StyledButton, StyledSection } from '../../styles';
import Card from '../../components/Card';

export default function ProductDetails() {
  const params = useParams();
  const history = useHistory();
  const product = PRODUCTS.find(
    cat => cat.name.toLowerCase() === params.name
  ).children.find(prod => prod.id == params.id);
  return (
    <StyledSection>
      <Card title={product.name}>
        <p>{product.description}</p>
        <p>Starting at: {product.price}</p>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
          <StyledButton onClick={() => history.goBack()}>
            Go back once!
          </StyledButton>
          <StyledButton onClick={() => history.go(-2)}>
            Go back twice!
          </StyledButton>
        </div>
      </Card>
    </StyledSection>
  );
}

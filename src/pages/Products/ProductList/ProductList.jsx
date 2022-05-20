import { useLocation } from 'react-router-dom';
import Card from '../../../components/Card';
import PRODUCTS from '../../../constants/products';
import { StyledGlobalLink, StyledSection } from '../../../styles';

export default function ProductList() {
  const currentPath = useLocation().pathname;
  return (
    <StyledSection>
      {PRODUCTS.map(product => (
        <Card key={product.id} title={product.name}>
          <p>{product.description}</p>
          <StyledGlobalLink to={`${currentPath}/${product.name.toLowerCase()}`}>
            Check out!
          </StyledGlobalLink>
        </Card>
      ))}
    </StyledSection>
  );
}

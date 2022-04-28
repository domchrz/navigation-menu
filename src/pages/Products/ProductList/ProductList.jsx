import { Link, useLocation } from 'react-router-dom';
import Card from '../../../components/Card';
import PRODUCTS from '../../../constants/products';
import { StyledSectionCentered } from '../../../styles';

export default function ProductList() {
  const currentPath = useLocation().pathname;
  return (
    <StyledSectionCentered>
      {PRODUCTS.map(product => (
        <Card key={product.id}>
          <h3>{product.name}</h3>
          <Link to={`${currentPath}/${product.name.toLowerCase()}`}>Details</Link>
        </Card>
      ))}
    </StyledSectionCentered>
  );
}

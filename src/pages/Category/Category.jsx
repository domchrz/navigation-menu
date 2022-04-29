import PRODUCTS from '../../constants/products';
import { useParams, useLocation } from 'react-router-dom';
import { StyledGlobalLink, StyledSection } from '../../styles';
import Card from '../../components/Card';

export default function Category() {
  const category = useParams().name;
  const currentPath = useLocation().pathname;

  // console.log(object);
  return (
    <StyledSection>
      {category &&
        PRODUCTS.find(cat => cat.name.toLowerCase() === category).children.map(
          prod => (
            <Card key={prod.id} title={`${prod.id}. ${prod.name}`}>
              <p>Checkout this product and learn more about it in the details!</p>
              <StyledGlobalLink to={`${currentPath}/${prod.id}`}>Select</StyledGlobalLink>
            </Card>
          )
        )}
    </StyledSection>
  );
}

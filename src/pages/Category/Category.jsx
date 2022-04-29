import PRODUCTS from '../../constants/products';
import { useParams, useLocation } from 'react-router-dom';
import { CardContainer } from '../../components/Card/styles';
import { StyledSectionCentered } from '../../styles';
import { Link } from 'react-router-dom';

export default function Category() {
  const category = useParams().name;
  const currentPath = useLocation().pathname;

  // console.log(object);
  return (
    <StyledSectionCentered>
      {category &&
        PRODUCTS.find(cat => cat.name.toLowerCase() === category).children.map(
          prod => (
            <CardContainer key={prod.id}>
              <h3>{prod.name}</h3>
              <p>{prod.id}</p>
              <Link to={`${currentPath}/${prod.id}`}>Select</Link>
            </CardContainer>
          )
        )}
    </StyledSectionCentered>
  );
}

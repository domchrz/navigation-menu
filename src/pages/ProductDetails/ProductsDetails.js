import PRODUCTS from '../../constants/products';
import { useParams, useHistory } from 'react-router-dom';
import { StyledSectionCentered } from '../../styles';
// import { Link } from 'react-router-dom';
import Card from '../../components/Card';

export default function ProductDetails() {
  const params = useParams();
  const history = useHistory();
  console.log(params);
  const product = PRODUCTS.find(
    cat => cat.name.toLowerCase() === params.name
  ).children.find(prod => prod.id == params.id);
  console.log(product);
  return (
    <StyledSectionCentered>
      <Card>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button onClick={() => history.goBack()}>Go back one</button>
        <button onClick={() => history.go(-2)}>Go back twice</button>
      </Card>
    </StyledSectionCentered>
  );
}

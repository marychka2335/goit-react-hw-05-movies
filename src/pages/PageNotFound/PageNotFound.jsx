import { Link } from 'react-router-dom';
import IconError404 from './IconPageNotFound';
import { BackToHomeBtn, Container, ErrorText } from './PageNotFound.styled';

function PageNotFound() {
  return (
    <Container>
      {<IconError404 />}
      <ErrorText>Sorry, this page has not found!</ErrorText>
      <Link to="/">
        <BackToHomeBtn type="button">Back to homepage</BackToHomeBtn>
      </Link>
    </Container>
  );
}

export default PageNotFound;
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div>
      <h1> Sorry. Not found page ...</h1>
      <h2>You can return with this link</h2>
      <Link to="/">HOME PAGE</Link>
    </div>
  );
};
export default NotFoundPage;

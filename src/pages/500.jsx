import { Error } from '@/components/Error/Error';

const ServerErrorPage = () => {
  return (
    <Error>
      <h1>Something broke on the server on this page</h1>
    </Error>
  );
};

export default ServerErrorPage;

import { useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Opssssss! : {err.status}: 😥😣</h1>
    </div>
  );
};

export default ErrorPage;

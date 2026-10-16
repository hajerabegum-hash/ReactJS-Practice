import { Outlet } from "react-router-dom";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import UserContext from "./utils/UserContext";

export const AppLayout = () => {
  return (
    <div>
      <UserContext.Provider value={{name:"hajera",email:"hajera@gmail.com"}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

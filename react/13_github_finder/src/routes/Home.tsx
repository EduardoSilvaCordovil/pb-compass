import { useState } from "react";
import User from "../components/User";
import Error from "../components/Error";
import Search from "../components/Search";
import Loader from "../components/Loader";
import { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setIsLoading(true);
    setError(false);
    setUser(null)
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    setIsLoading(false);

    if(res.status === 404){
      setError(true);
      return;
    }

    const { login, location, followers, following, avatar_url } = data;
    const userData: UserProps = {
      login,
      location,
      followers,
      following,
      avatar_url,
    };
    setUser(userData);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;

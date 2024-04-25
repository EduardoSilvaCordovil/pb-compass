import { useEffect, useMemo, useState } from "react";

const UserInfo = ({ userInfo }) => {
  useEffect(() => {
    document.title = `${userInfo.name} - ${userInfo.jobTitle}`;
  }, [userInfo]);

  return (
    <div>
      <h1>Nome: {userInfo.name}</h1>
      <p>Profissão: {userInfo.jobTitle}</p>
    </div>
  );
};

// --------------------------------------------------------------

const fibonnaci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonnaci(n - 1) + fibonnaci(n + 2);
};

const FibCalculator = ({ num }) => {
  const fibResult = useMemo(() => fibonnaci(num), num);

  return (
    <div>
      <p>
        Fibonacci de {num} é {fibResult}
      </p>
    </div>
  );
};

// --------------------------------------------------------------

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

const OnlineStatusIndicator = () => {
  const isOnline = useOnlineStatus();
  return (
    <div>
      <p>Você está atualmente: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

const Exercises = () => {
  const userInfo = { name: "Alice", jobTitle: "Desenvolvedora" };

  return (
    <div>
      <h2>Exercício 1</h2>
      <UserInfo userInfo={userInfo} />
      <h2>Exercício 2</h2>
      <FibCalculator num={10} />
      <h2>Exercício 3</h2>
      <OnlineStatusIndicator />
    </div>
  );
};

export default Exercises;

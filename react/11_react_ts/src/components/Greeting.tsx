type GreetingProps = {
  name: string;
};
const Greeting = ({ name }: GreetingProps) => {
  return <div>Olá, {name}</div>;
};
export default Greeting;

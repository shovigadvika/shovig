import CardStack from "./CardStack";
import CardStack2 from "./CardStack2";
import CardStack3 from "./CardStack3";

const ComponentStack = () => {
  return (
    <div className="relative bg-white">
      <CardStack />
      <CardStack2 />
      <CardStack3 />
    </div>
  );
};

export default ComponentStack;

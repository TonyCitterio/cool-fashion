import p1 from "../pictures/nyheter_1.png";
import p2 from "../pictures/nyheter2.png";
import p3 from "../pictures/nyheter3.png";

const picture1 = () => {
  return (
    <>
      <img src={p1} alt="New Arrivals" height={350} width={1000}></img>
    </>
  );
};

const picture2 = () => {
  return (
    <>
      <img src={p2} alt="New Arrivals" height={350} width={1000}></img>
    </>
  );
};

const picture3 = () => {
  return (
    <>
      <img src={p3} alt="New Arrivals" height={350} width={1000}></img>
    </>
  );
};

export const pictures = [picture1(), picture2(), picture3()];

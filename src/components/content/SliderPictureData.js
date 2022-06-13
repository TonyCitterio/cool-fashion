import mario from "../pictures-multiPictureFeature/Mario.jpg";
import mario1 from "../pictures-multiPictureFeature/Mario1.jpg";
import mario2 from "../pictures-multiPictureFeature/Mario2.jpeg";
import hoodie from "../pictures-multiPictureFeature/hoodie.jpeg";
import hoodie1 from "../pictures-multiPictureFeature/hoodie1.jpeg";
import hoodie2 from "../pictures-multiPictureFeature/hoodie2.jpeg";

const Mario = () => {
  return (
    <>
      <img src={mario} alt="A Mario T-shirt" height={650} width={650}></img>
    </>
  );
};

const Mario1 = () => {
  return (
    <>
      <img src={mario1} alt="A Mario T-shirt" height={650} width={650}></img>
    </>
  );
};

const Mario2 = () => {
  return (
    <>
      <img src={mario2} alt="A Mario T-shirt" height={650} width={650}></img>
    </>
  );
};

export const marioTsPictures = [Mario(), Mario1(), Mario2()];

const Hoodie = () => {
    return(
        <>
        <img src={hoodie} alt="A Hoodie" height={550} width={380}></img>
        </>
    );
};

const Hoodie1 = () => {
    return (
        <>
        <img src={hoodie1} alt="A Hoodie" height={550} width={380}></img>
        </>
    );
};
const Hoodie2 = () => {
    return (
        <>
        <img src={hoodie2} alt="A Hoodie" height={620} width={400}></img>
        </>
    );
};

export const hoodiePictures = [Hoodie(), Hoodie1(), Hoodie2()];
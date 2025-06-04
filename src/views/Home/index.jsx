import Presentation from "./component/Presentation";
import HomeLayout from "./Layout/HomeLayout";

const Home = () => {
  return (
    <>
      <HomeLayout>
        <Presentation />
      </HomeLayout>
    </>
  );
};

export default Home;

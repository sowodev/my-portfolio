import Card from "./Card";

const PagesCards = function pagesCards() {
  return (
    <div className="flex flex-col w-[90%] h-[90%] bg-white justify-center items-center gap-6">
      <Card path="./src/assets/imgs/articles/city.jpeg" />
      <Card path="./src/assets/imgs/articles/drone.jpeg" />
      <Card path="./src/assets/imgs/articles/setup.webp" />
      <Card path="./src/assets/imgs/articles/work.webp" />
    </div>
  );
};

export default PagesCards;

import HomeNews from "./homenews";
import HomeNewsCard from "./homenewscard";
import ContainerLayout from "./layouts/ContainerLayout";

export default function HomeNewsSection() {
  return (
    <ContainerLayout>
      <HomeNews />
      <HomeNewsCard />
    </ContainerLayout>
  );
}

import ContainerLayout from "../layouts/ContainerLayout";
import Link from "next/link";
import Button from "../ui/Button";
import { news } from "@/data/news";
import NewsCard from "../cards/NewsCard";
import Heading from "../ui/Heading";
import { slugs } from "@/extra/slugs";
import FadeUp from "@/components/animations/FadeUp";

const NewsSection = ({ showAll = false }) => (
  <ContainerLayout>
    <ContainerLayout className="grid md:grid-cols-2 gap-4 mt-4 mb-12">
      <div className="flex flex-col items-between gap-2">
        <Heading level={2}>News & Articles</Heading>

        <Link href={slugs.news} className="font-semibold">
          <Button variant="secondary">More Blogs</Button>
        </Link>
      </div>
      <div className="flex items-end">
        <p className="text-muted ">
          Stay informed with the latest news, announcements, and achievements
          from the QIHE community, helping you remain engaged and connected with
          campus life and academic developments.
        </p>
      </div>
    </ContainerLayout>
  </ContainerLayout>
);

export default NewsSection;

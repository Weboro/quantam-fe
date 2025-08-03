import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { siteLinks } from "@/extra/siteLinks";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="">
          <Heading className="text-brand-primary-black mt-4 mb-2" level={1}>
            About QIHE
          </Heading>

          <p>
            At QIHE, we are driven by a mission to create an empowering
            educational ecosystem where every student is inspired to pursue
            their dreams and make a meaningful impact through education.
            Committed to delivering excellence, our programs are designed to
            meet the high standards of Australian higher education, placing
            quality and student success at the heart of everything we do.
            Located in the vibrant hub of Parramatta, QIHE offers students an
            enriching educational experience in a multicultural environment.
            With peers from diverse backgrounds, students benefit from the best
            of Australian higher education while developing a global
            perspective.
          </p>
          <br />
          <p>
            Our institute brings together a dedicated team of educators with
            diverse expertise and qualifications, united by a shared passion for
            fostering student achievement. At QIHE, our focus extends beyond
            academic success—we aim to ensure our students are job-ready and
            equipped to pursue fulfilling careers, making a positive impact in
            their chosen fields.
          </p>
        </div>
        <div className="bg-brand-primary/10 grid place-items-center text-brand-primary">
          IMAGE HERE
        </div>
      </ContainerLayout>

      <hr className="my-12 border-muted/50" />

      <ContainerLayout className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="bg-brand-primary/10 grid place-items-center text-brand-primary">
          IMAGE OF CHAIRPERSON HERE
        </div>

        <div className="">
          <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
            A Note from the Chair
          </Heading>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            perspiciatis doloremque facere expedita, voluptatem nisi corrupti!
            Reiciendis ipsa harum fugiat nobis ipsum, nesciunt explicabo? Illum
            consequuntur quibusdam fugiat vel saepe earum minus similique
            beatae, cumque magnam voluptatum explicabo quis quam nesciunt
            veritatis nostrum ut? Tempore vitae nostrum distinctio pariatur
            quibusdam commodi quam dicta, inventore expedita repudiandae, totam
            rerum voluptatum dolores exercitationem. Illo, cumque? Quod, dolorem
            iure accusamus ducimus excepturi similique qui autem quo placeat
            facilis, totam quis consequuntur voluptates nesciunt veritatis
            obcaecati illum labore quos, modi magni? Corrupti, architecto error
            recusandae eius ducimus optio laudantium nisi sunt, eveniet adipisci
            laborum.
          </p>

          <p className="mt-4">
            <strong>Emeritus Professor Jim Psaros</strong>
            <br />
            Chair of the Governing Council
          </p>
        </div>
      </ContainerLayout>

      <div className="space-y-40 mt-40">
        <FaqSection />
        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;

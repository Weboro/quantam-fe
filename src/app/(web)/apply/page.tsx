// import Breadcrumbs from "@/components/global/Breadcrumbs";
import { files } from "@/extra/slugs";
import { redirect, RedirectType } from "next/navigation";

const page = () => {
  redirect(files.applyForm, RedirectType.replace);

  // return (
  //   <>
  //     <Breadcrumbs />

  //     <div className="my-32 text-center">TBA</div>
  //   </>
  // );
};

export default page;

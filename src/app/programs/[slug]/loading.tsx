import ContainerLayout from "@/components/layouts/ContainerLayout";

const loading = () => (
  <ContainerLayout className="h-[40vh] grid place-items-center">
    <i className="fi fi-rr-spinner text-5xl animate-spin flex text-brand-primary"></i>
  </ContainerLayout>
);

export default loading;

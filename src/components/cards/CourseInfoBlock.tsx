import Heading from "../ui/Heading";

const CourseInfoBlock = ({
  label,
  value,
}: {
  label: string;
  value: string | string[] | null | undefined;
}) => {
  if (!value) return null;

  return (
    <div>
      <Heading level={5} className="font-semibold">
        {label}
      </Heading>

  <p
  className="text-muted text-sm -mt-0.5"
  dangerouslySetInnerHTML={{
    __html: Array.isArray(value) ? value.join(", <br />") : value,
  }}
/>

    </div>
  );
};
export default CourseInfoBlock;

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
      <Heading level={4} className="font-semibold">
        {label}
      </Heading>

      <p className="text-muted">
        {Array.isArray(value) ? value.join("\n") : value}
      </p>
    </div>
  );
};
export default CourseInfoBlock;

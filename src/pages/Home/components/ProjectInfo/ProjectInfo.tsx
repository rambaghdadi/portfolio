import classes from "./ProjectInfo.module.css";

interface IProjectInfoProps {
  name: string;
  description: string;
  link: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
export const ProjectInfo = ({
  name,
  description,
  link,
  onMouseEnter,
  onMouseLeave,
}: IProjectInfoProps) => {
  return (
    <div className={classes.container}>
      <a
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        href={link}
        target="_blank"
      >
        <p>{name}</p>
      </a>
      <p>{description}</p>
    </div>
  );
};

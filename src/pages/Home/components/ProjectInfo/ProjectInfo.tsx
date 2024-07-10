import classes from "./ProjectInfo.module.css";

interface IProjectInfoProps {
  name: string;
  description: string;
  link: string;
}
export const ProjectInfo = ({ name, description, link }: IProjectInfoProps) => {
  return (
    <div className={classes.container}>
      <a href={link} target="_blank">
        <p>{name}</p>
      </a>
      <p>{description}</p>
    </div>
  );
};

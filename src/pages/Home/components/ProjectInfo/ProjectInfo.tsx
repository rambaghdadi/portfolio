import classes from "./ProjectInfo.module.css";

interface IProjectInfoProps {
  name: string;
  description: string;
}
export const ProjectInfo = ({ name, description }: IProjectInfoProps) => {
  return (
    <div className={classes.container}>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

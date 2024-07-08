import classes from "./Footer.module.css";

const links = [
  { name: "GitHub", href: "https://github.com/rambaghdadi" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/rambaghdadi" },
];

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        {links.map((link) => (
          <a key={link.name} target="_blank" href={link.href}>
            <p>{link.name}</p>
          </a>
        ))}
      </div>
    </footer>
  );
};

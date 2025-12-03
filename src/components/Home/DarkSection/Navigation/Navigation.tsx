import NavLink from './NavLink';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-12 ">
        <NavLink whereTo="/" text="HOME" />
        <NavLink whereTo="about" text="ABOUT" />
        <NavLink whereTo="projects" text="PROJECTS" />
        <NavLink whereTo="contact" text="CONTACT" />
      </ul>
    </nav>
  );
};

export default Navigation;

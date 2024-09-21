import Info from "./User";

const Social = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-10 transform rotate-90 fixed -left-52 bottom-32 z-10">
      {Info.socials.map(({ name, icon, link }) => (
        <a href={link} className="hover:text-primary transform -rotate-90 hover:scale-125 duration-300 ease-in-out" key={name}>
          {icon}
        </a>
      ))}

      <hr className="border-2 border-foreground w-60 rounded-full" />
    </div>
  );
};

export default Social;

import Info from "./User";

const Mail = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-10 transform rotate-90 fixed -right-44 lg:-right-40 bottom-32">
      <a href={`mailto:${Info.email}`} className="text-foreground hover:text-primary transform hover:scale-125 duration-300 ease-in-out text-lg leading-9">
        {Info.email}
      </a>

      <hr className="border-2 border-foreground w-60 rounded-full" />
    </div>
  );
};

export default Mail;

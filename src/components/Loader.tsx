import IconCloud from "./MagicUi/IconCloud";
import Particles from "./MagicUi/Particles";
import { slugs } from "./User";

export function CloudLoader() {
  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center md:animate-[ping_1s_ease-in-out_infinite_2.5s] rounded-lg bg-background">
      <Particles quantity={500} size={1} className="pointer-events-none absolute w-full h-full left-0 top-0" />
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

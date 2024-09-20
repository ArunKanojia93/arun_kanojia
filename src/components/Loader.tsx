import IconCloud from "./MagicUi/IconCloud";
import { slugs } from "./User";

export function CloudLoader() {
  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center animate-[ping_2s_ease-in-out_infinite_4.7s] rounded-lg bg-background">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

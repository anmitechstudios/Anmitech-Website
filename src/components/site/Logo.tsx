import fullLogoOrange from "@/images/full logo orange.svg";
import fullLogoWhite from "@/images/full logo white.svg";
import { useTheme } from "@/contexts/ThemeContext";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  const { theme } = useTheme();
  return (
    <a href="#top" className={`inline-flex items-center ${className ?? ""}`}>
      <img
        src={theme === "dark" ? fullLogoWhite : fullLogoOrange}
        alt="Anmitech Studios"
        className="h-8 w-auto"
      />
    </a>
  );
};

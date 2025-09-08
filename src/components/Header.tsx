import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { routes } from "@/router/router";
import { Link } from "react-router";
import { ThemeToggler } from "./ThemeToggler";

const Header = () => {
  const root = routes.find((route) => route.path === "/");
  const navItems = root?.children?.filter((route) => route.showInNav) ?? [];

  return (
    <div className="flex flex-row justify-between mx-auto w-full max-w-3xl py-8 px-6 sm:px-0">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {navItems.map((route, key) => {
            return (
              <NavigationMenuItem key={key}>
                <NavigationMenuLink
                  key={key}
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    key={key}
                    to={route.index ? "/" : `${route.path ?? ""}`}
                  >
                    {route.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeToggler />
    </div>
  );
};

export default Header;

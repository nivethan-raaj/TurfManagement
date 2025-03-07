"use client";
import { useRef } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { ModeToggle } from "./moodToggle";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import * as React from "react";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeaderNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "#",
      subItems: [
        { name: "Book", href: "/book" },
        { name: "Tournament&Coach", href: "/Tournament&Coach" },
        { name: "Rent", href: "/Rent" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <main style={{ paddingTop: "90px" }}>
      <header className="bg-slate-200 shadow-sm fixed top-0 w-full z-50 dark:bg-[#26284c] py-3">
        <nav className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <ModeToggle />
            </div>
            <div></div>
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto rounded-sm"
                  src="/turfmanagement.jpg"
                  alt="Logo"
                />
                <div>
                  <span className="txt ml-2 text-xl font-bold text-gray-900 dark:text-green-500">
                    TURFMASTER
                  </span>
                </div>
              </Link>
            </div>
            <div className="items-center hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                TurfMASTER
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Your Trusted Partner in TURF management
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem
                          href="/book"
                          title="Book"
                          className="hover:text-green-400"
                        >
                          Book your turf
                        </ListItem>

                        <ListItem
                          href="/tournament"
                          title="Tournament & coach"
                          className="hover:text-green-400"
                        >
                          Book tournaments and Coaches
                        </ListItem>
                        <ListItem
                          href="/rent"
                          title="Products"
                          className="hover:text-green-400"
                        >
                          All types of sports equipments
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Contact Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center"></div>
            <div className="flex items-center">
              <button
                className="btn relative mx-10 px-10 py-2 text-black cursor-pointer z-0 rounded-lg flex flex-row items-center justify-between"
                onClick={handleLogin}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Log In
              </button>
            </div>
            <div className="flex items-center sm:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                      <X className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] bg-white text-black p-4 z-50"
                >
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {navItems.map((item) =>
                          item.subItems ? (
                            <div key={item.name} className="space-y-1">
                              <div className="px-3 text-sm font-semibold text-gray-900">
                                {item.name}
                              </div>
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )
                        )}
                      </div>
                      <div className="flex flex-col items-start gap-4">
                        <Button onClick={() => setIsOpen(false)} size="sm">
                          <Link href="/login">Log In</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>
      <style jsx>
        {`
          .btn::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #4ade80;
            left: 0;
            top: 0;
            border-radius: 10px;
            z-index: -1;
          }

          .btn::before {
            content: "";
            background: linear-gradient(
              45deg,
              #ff0000,
              #ff7300,
              #fffb00,
              #48ff00,
              #00ffd5,
              #002bff,
              #ff00c8,
              #ff0000
            );
            position: absolute;
            top: -2px;
            left: -2px;
            background-size: 600%;
            z-index: -1;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            filter: blur(8px);
            animation: glowing 20s linear infinite;
            transition: opacity 0.3s ease-in-out;
            border-radius: 10px;
            opacity: 0;
          }

          .btn:hover::before {
            opacity: 1;
          }

          .btn:active::after {
            background: transparent;
          }

          .btn:active {
            color: #000;
            font-weight: bold;
          }

          @keyframes glowing {
            0% {
              background-position: 0 0;
            }
            50% {
              background-position: 400% 0;
            }
            100% {
              background-position: 0 0;
            }
          }
        `}
      </style>
      <style jsx>{`
        .txt {
          position: relative;
          display: inline-block;
          transition: color 0.3s; /* Smooth color transition */
        }

        .txt:hover {
          color: #000000; /* Glow color when hovering */
          animation: glowing-text 3s infinite; /* Animation duration and looping */
        }
        .dark .txt:hover {
          color: #fdfefe; /* Glow color for dark mode when hovering */
        }

        @keyframes glowing-text {
          0% {
            text-shadow: 0 0 5px #ff0000, 0 0 10px #ff7300, 0 0 15px #fffb00,
              0 0 20px #48ff00, 0 0 25px #00ffd5, 0 0 30px #002bff,
              0 0 35px #ff00c8;
          }
          50% {
            text-shadow: 0 0 20px #ff0000, 0 0 30px #ff7300, 0 0 40px #fffb00,
              0 0 50px #48ff00, 0 0 60px #00ffd5, 0 0 70px #002bff,
              0 0 80px #ff00c8;
          }
          100% {
            text-shadow: 0 0 5px #ff0000, 0 0 10px #ff7300, 0 0 15px #fffb00,
              0 0 20px #48ff00, 0 0 25px #00ffd5, 0 0 30px #002bff,
              0 0 35px #ff00c8;
          }
        }
      `}</style>
    </main>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

"use client";

import * as React from "react";
import Link from "next/link";

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

import {
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

const components1: { title: string; href: string; description: string }[] = [
  {
    title: "Accomodation",
    href: "/",
    description:
      "Accommodation facilities will be provided at NSUT Dwarka campus.",
  },
  {
    title: "Travel Information",
    href: "/",
    description:
      "Travel Information will be shared prior to event , click for more.",
  },
  {
    title: "Call for volunteers",
    href: "/",
    description:
      "Click for more information on how to volunteer for the event.",
  },
  {
    title: "Call for Industry Exhibitors",
    href: "/",
    description: "Click for more information on how to exhibit at the event.",
  },
];

const components2: { title: string; href: string; description: string }[] = [
  {
    title: "Call for Papers",
    href: "/",
    description:
      "Click for more information on how to submit your paper for the event.",
  },
  {
    title: "Registration",
    href: "/",
    description:
      "Click for more information on how to register for the event.",
  },
  {
    title: "Paper Submission Guidelines",
    href: "/",
    description:
      "Click for more information on how to submit your paper for the event.",
  },
  {
    title: "Presentation Schedule",
    href: "/",
    description: "Click for more information on the presentation schedule.",
  },
];

const components3: { title: string; href: string; description: string }[] = [
  {
    title: "Important Dates",
    href: "/",
    description:
      "Click for more information on the important dates for the event.",
  },
  {
    title: "Plenaries and Keynotes",
    href: "/",
    description:
      "Click for more information on the plenaries and keynotes for the event.",
  },
  {
    title: "Panel Discussions",
    href: "/",
    description:
      "Click for more information on the panel discussions for the event.",
  },
  {
    title: "IEEE Promotional Events",
    href: "/",
    description: "Click for more information on the IEEE promotional events.",
  },
];

export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex">
              <ul className="grid  p-2 md:w-[400px]  lg:w-[250px] hover:cursor-pointer border-r">
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <PiBookOpenTextLight className="text-2xl mr-2 text-red-600" />
                  <div className="">
                    <a>Organizing Committee</a>
                    <p className="text-gray-400 text-sm font-light">
                      Centralize your knowledge
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <PiTargetLight className="text-2xl mr-2 text-blue-600" />
                  <div className="">
                    <a>Technical Program Committee</a>
                    <p className="text-gray-400 text-sm font-light">
                      For every team or size
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <PiFileThin className="text-2xl mr-2 text-yellow-600" />
                  <div className="">
                    <a>Advisory Committee</a>
                    <p className="text-gray-400 text-sm font-light">
                      Simple & Powerful
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">            
                </div>
              </ul>

            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>General Info</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components1.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Authors</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components2.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Program</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components3.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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

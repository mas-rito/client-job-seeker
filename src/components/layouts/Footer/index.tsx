import { Container } from "@/components/atoms/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Dribbble, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export function Footer() {
  const abouts = [
    { title: "Companies", link: "/companies" },
    { title: "Pricing", link: "/pricing" },
    { title: "Terms", link: "/terms" },
    { title: "Admivice", link: "/advice" },
    { title: "Privacy Policy", link: "/privacy-policy" },
  ];
  const resources = [
    { title: "Help docs", link: "/help" },
    { title: "Guide", link: "/guide" },
    { title: "Updates", link: "/update" },
    { title: "Contact us", link: "/contact" },
  ];
  const year = new Date().getFullYear();

  const icons = [
    {
      icon: Facebook,
      link: "https://www.facebook.com/",
    },
    {
      icon: Twitter,
      link: "https://twitter.com/",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/",
    },
    {
      icon: Dribbble,
      link: "https://dribbble.com/",
    },
  ];
  return (
    <div className="bg-slate-900 pt-16 pb-11 mt-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <div className="col-span-1">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={200}
              height={100}
              className="mb-6"
            />
            <p className="text-slate-200">
              Great platform for the job seeker that possionate about startup.
              Find your dream job easier.
            </p>
          </div>
          <div className="col-span-1 ps-10">
            <h2 className="text-slate-100 font-semibold text-2xl mb-4">
              About
            </h2>
            <div className="flex flex-col gap-y-2">
              {abouts.map((item, i) => (
                <Link key={i} href={item.link} className="text-slate-200">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1 ps-10">
            <h2 className="text-slate-100 font-semibold text-2xl mb-4">
              Resources
            </h2>
            <div className="flex flex-col gap-y-2">
              {resources.map((item, i) => (
                <Link key={i} href={item.link} className="text-slate-200">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1 space-y-4">
            <h2 className="text-slate-100 font-semibold text-2xl">
              Get jobs notifications
            </h2>
            <p className="text-slate-200">
              The latest jobs news, articles, sent to your inbox weekly
            </p>
            <div className="flex flex-row items-center gap-2">
              <Input placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <Separator className="my-10" />

        <div className="flex flex-row justify-between items-center text-slate-200 text-sm">
          <p>© {year} Job Board. All rights reserved.</p>
          <div className="flex flex-row items-center gap-x-4">
            {icons.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="text-slate-200 hover:text-primary transition-colors"
              >
                <item.icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

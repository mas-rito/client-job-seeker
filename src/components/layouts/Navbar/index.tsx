// @flow
import { Container } from "@/components/atoms/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
type Props = {};
export function Navbar({}: Props) {
  return (
    <Container className="flex flex-row justify-between items-center py-6">
      <Link href="/">
        <Image src="/images/logo2.png" alt="logo" width={160} height={50} />
      </Link>

      <div className="inline-flex gap-x-4">
        <Link href="/" className="hover:text-primary transition-colors">
          Find Jobs
        </Link>
        <Link href="/" className="hover:text-primary transition-colors">
          Browse Companies
        </Link>
      </div>

      <div className="inline-flex gap-2">
        <Button variant="link">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </Container>
  );
}

// @flow
import * as React from "react";
import { Container } from "../atoms/container";
import { Button } from "../ui/button";
import Image from "next/image";

export function BannerStart() {
  return (
    <Container className="flex flex-row justify-between bg-primary px-16 pt-12 rounded shadow">
      <div className="space-y-4 pe-16">
        <h1 className="text-5xl font-semibold text-primary-foreground">
          Start posting jobs today
        </h1>
        <p className="text-xl text-primary-foreground">
          Create your account to get started
        </p>
        <Button size="lg" variant="secondary">
          Sign Up for free!
        </Button>
      </div>
      <Image
        src={"/images/dashboard.png"}
        alt="Dashboard"
        width={500}
        height={500}
      />
    </Container>
  );
}

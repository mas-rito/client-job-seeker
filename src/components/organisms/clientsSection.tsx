import { clients } from "@/constants";
import { client } from "@/types/clients";
import Image from "next/image";
import * as React from "react";

export function ClientsSection() {
  return (
    <div>
      <h1 className="text-muted-foreground text-xl mb-6">
        Companies we work with
      </h1>
      <div className="flex flex-row justify-between items-center">
        {clients.map((item: client, i: number) => (
          <Image
            key={i}
            src={item.url}
            alt={item.name}
            width={140}
            height={45}
          />
        ))}
      </div>
    </div>
  );
}

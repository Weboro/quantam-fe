import { type IAgent } from "@/data/agents";
import Image from "next/image";
import React from "react";
import Heading from "../ui/Heading";
import Link from "next/link";

type IAgentCard = Pick<
  IAgent,
  "companyImage" | "companyName" | "agentName" | "phone" | "email" | "url"
>;

const AgentCard: React.FC<IAgentCard> = ({
  companyImage,
  companyName,
  agentName,
  phone,
  email,
  url,
}) => {
  return (
    <div className="p-3 border border-muted/50 shadow rounded-xl overflow-hidden">
      <Image
        src={companyImage}
        width={150}
        height={150}
        alt={`Logo of ${companyName}`}
        className="w-12 aspect-square object-cover rounded-full mb-2"
      />

      <Link target="_blank" href={url}>
        <Heading level={4}>{companyName}</Heading>
      </Link>

      {agentName && (
        <p className="flex items-center gap-1 text-gray-700 font-medium">
          <i className="fi fi-br-circle-user flex"></i>
          <span>{agentName}</span>
        </p>
      )}

      {email && (
        <Link
          href={`mailto:${email}`}
          className="flex items-center gap-1 text-muted hover:text-brand-primary transition-all group/link"
        >
          <i className="fi fi-br-envelope flex"></i>
          <span className="group-hover/link:underline">{email}</span>
        </Link>
      )}

      {phone && (
        <Link
          href={`tel:${phone}`}
          className="flex items-center gap-1 text-muted hover:text-brand-primary transition-all group/link"
        >
          <i className="fi fi-br-phone-flip scale-x-[-1] flex"></i>
          <span className="group-hover/link:underline">{phone}</span>
        </Link>
      )}
    </div>
  );
};

export default AgentCard;

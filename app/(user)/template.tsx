'use client'
import { any } from "zod";
import Theme from "../../components/Theme";

export default function Template({ children }: {
    children: React.ReactNode
  }) {
    return <div><Theme title={any} >{children}</Theme></div>;
  }
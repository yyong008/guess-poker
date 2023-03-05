import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";


import css from 'github-markdown-css/github-markdown-light.css'
import mcss from '~/styles/mkd.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: css,
    },
    {
      rel: "stylesheet",
      href: mcss,
    }
  ];
};


export default function Hl() {
  return <div className="markdown-body">
    <Outlet />
  </div>
}
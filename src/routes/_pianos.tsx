import React, { useEffect, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router'
// import { type LinksFunction } from "@vercel/remix";
import Footer from "./_pianos/-components/footer";
import Littletop from "./_pianos/-components/littletop";
import Navbar from "./_pianos/-components/navbar";
// import Share from "./components/share";
import { Outlet, useLocation } from "@tanstack/react-router";
// import Darkness from "./components/darkness";
import Parallax from "./_pianos/-components/parallax";
// import { useState } from "react";
import { pathnameSplitter } from "./_pianos/-components/variations";
// import favicon from "~/lib/functions/favicon";

const RouteComponent = () => {
  const [show, setShow] = useState<boolean | null>(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  const { pathname } = useLocation();
  const { activity, urlActivity } = pathnameSplitter(pathname);

  useEffect(() => {
    if (window) {
      const body = document.body;
      const html = document.documentElement;
      const height =
        Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        ) - innerHeight;

      setBodyHeight(height);
    }
  }, [setBodyHeight]);

  return (
    <div
      className="font-ubuntu_light"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <Littletop setShow={setShow} />
      {/* <Navbar show={show} setShow={setShow} />
      <Darkness show={show} />*/}
      <Parallax bodyHeight={bodyHeight} />
      <Outlet
        // context={{
        //   setBodyHeight,
        //   Share,
        // }}
      />
      <Footer activity={activity} urlActivity={urlActivity} /> 
    </div>
  );
};

// const RouteComponent = () => (
//   <h1>_pianos.tsx file</h1>
// )

export const Route = createFileRoute('/_pianos')({
  component: RouteComponent,
})

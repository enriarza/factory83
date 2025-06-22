import React, { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import Littletop from './-components/littletop'


const RouteComponent = () => {
  const [show, setShow] = useState<boolean | null>(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  // const { pathname } = useLocation();
  // const { activity, urlActivity } = pathnameSplitter(pathname);
  return (
  <div
      className="font-ubuntu_light"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >      
      <Littletop setShow={setShow} />
      {/* <Navbar show={show} setShow={setShow} />
      <Darkness show={show} />
      <Parallax bodyHeight={bodyHeight} />
      <Outlet
        context={{
          setBodyHeight,
          Share,
        }}
      />
      <Footer activity={activity} urlActivity={urlActivity} /> */}
    </div>
  );
}

export const Route = createFileRoute('/_pianos/')({
  component: RouteComponent,
})

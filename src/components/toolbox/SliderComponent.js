import { useEffect, useRef, useState } from "react";
import { ArrowCircle } from "./CustomSvgs";

export default function SliderComponent({
  slides,
  vertical = false,
  slidesToShow = 3,
  style,
  ref,
  ...props
}) {
  const listRef = useRef();
  if(ref){listRef=ref}
  const [pagesize, setPageSize] = useState({ height: "", width: "" });

  useEffect(() => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  }, [window.innerWidth, window.innerHeight]);
  let scrollDown = (event) => {
    let itemSize = 500;
    let newScrollTop = listRef.current.scrollTop;
    newScrollTop = (Math.floor(newScrollTop / itemSize) + 1) * itemSize;
    listRef.current.scroll({ top: newScrollTop });
  };

  let scrollUp = (event) => {
    let itemSize = 500;
    let newScrollTop = listRef.current.scrollTop;
    newScrollTop = (Math.floor(newScrollTop / itemSize) - 1) * itemSize;
    listRef.current.scroll({ top: newScrollTop });
  };

  let scrollLeft = (event) => {
    let itemSize = pagesize.width/slidesToShow;
    itemSize=itemSize<200?200:itemSize
    let newScrollLeft = listRef.current.scrollLeft;
    newScrollLeft = (Math.floor(newScrollLeft / itemSize) - 1) * itemSize;
    listRef.current.scroll({ left: newScrollLeft });
  };
  let scrollRight = (event) => {
    let itemSize = pagesize.width/slidesToShow;
    itemSize=itemSize<200?200:itemSize
    let newScrollLeft = listRef.current.scrollLeft;
    newScrollLeft = (Math.floor(newScrollLeft / itemSize) + 1) * itemSize;
    listRef.current.scroll({ left: newScrollLeft });
  };

  return (
    <div
    className=""
      style={{
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <div className="btn desktop" onClick={vertical ? scrollUp : scrollLeft}>
        <ArrowCircle rotate={vertical ? 180 : 90} width="10vw" />
      </div>
      <div
        ref={listRef}
        className="hideScrollbar"
        onLoad={(event) => event.currentTarget.scroll({ top: 0 })}
        style={{
          height: "100%",
          width: "100%",
          overflowX: "scroll",
          overflowY: "auto",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        {slides.map((item) => (
          <div key={"slideItem"+Math.random()} style={{ flex: "2 0 "+pagesize.width/slidesToShow+"px",minWidth:"200px",maxHeight:"100%" }}>{item}</div>
        ))}
      </div>
      <div className="btn" onClick={vertical ? scrollDown : scrollRight}>
        <ArrowCircle rotate={vertical ? 0 : 270} width="10vw" />
      </div>
    </div>
  );
}

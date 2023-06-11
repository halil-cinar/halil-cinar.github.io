import { Button } from "reactstrap";
import urls from "../../constants/urls";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Github, Instagram, Linkedin } from "../toolbox/CustomSvgs";
import { TypeAnimation } from "react-type-animation";
import { ScrollTrigger } from "gsap/all";
export default function HomePage({ ...props }) {
  const svgRef = useRef();
  const imageRef = useRef();

  const app = useRef();
  let baseText="I'am"
  const [title,setTitle]=useState(baseText)

  let sequence=[
    'I am Halil Çınar', 
    4000, // Waits 4s
    'I am into Software Developer', 
    4000, 
    'I am into React Developer', 
    4000,
    "I am into Android Developer",
    4000,
   
  ]



  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      


      let animation = gsap.fromTo(
        svgRef.current,
        { translateY: "-10px" ,ease:"ease"},
        {
          translateY: "0px",
          duration: "1",
         
          ease:"ease-in-out",
          onComplete:()=>animation.reverse(),
          onReverseComplete:()=>animation.restart()

        }
      )
      let aniamtion2 = gsap.fromTo(
        imageRef.current,
        { translateX: "50vw" },
        { translateX: "0px", duration: "1.5" }
      );
      let backgroundAnimation = gsap.fromTo(
        app.current,
        { opacity: 0 },
        { opacity: 1, duration: "1 " }
      );
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={app}
      id="HomePage"
      style={{
        background: "url(" + urls.homePageBackground + ")",
        height: "90vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="d-flex justify-content-between h-100">
        <div
          style={{
            flex: "3",
            padding: "10px",
            display: "grid",
            justifyContent: "center",
          }}
          >
          <div className="" style={{width:"40vw"}}>
            <h1
              style={{
                mixBlendMode: "difference",
                color: "white",
                fontSize: "65px",
              }}
            >
              Hi There,
            </h1>
            <TypeAnimation
      sequence={[...sequence]}
      wrapper="span"
      cursor={true}
      speed={10}
      repeat={Infinity}
      style={{ fontSize: '50px', color:"white",fontWeight:"700" }}
    />
          </div>

          <div className="d-flex justify-content-center align-items-center ">
            {" "}
            <button
              className="w-75"
              style={{
                minWidth:"max-content",
                padding: "5px 35px",
                borderRadius: "50px",
                background: "linear-gradient(to bottom, #1018ff, #00035d)",
              }}
              onClick={()=>{
                document.getElementById("AboutPage").scrollIntoView({behavior:"smooth"})
              }}
            >
              <span
                style={{
                  fontSize: "40px",
                  fontStyle: "italic",
                  fontWeight: "bolder",
                  mixBlendMode: "difference",
                  color: "white",
                }}
              >
                About Me{" "}
                <svg
                  ref={svgRef}
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 53 53"
                >
                  <path
                    id="Icon_open-arrow-circle-bottom"
                    data-name="Icon open-arrow-circle-bottom"
                    d="M25.967,0C11.62,0,0,11.868,0,26.52s11.62,26.52,25.967,26.52S51.934,41.172,51.934,26.52,40.314,0,25.967,0ZM19.475,6.63H32.459V26.52H45.442L25.967,46.409,6.492,26.52H19.475Z"
                    fill="#707070"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="d-flex justify-content-center ">
            <Button
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "100%",
                marginRight: "10px",
              }}
            >
              <Linkedin width={45} height={45}/>
            </Button>
            <Button
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "100%",
                marginRight: "10px",
             
              }}
            ><Github width={45} height={45}/></Button>
            <Button
              style={{
                display:"none",
                width: "70px",
                height: "70px",
                borderRadius: "100%",
                marginRight: "10px",
                
              }}
            ><Instagram width={45} height={45}/></Button>
            <Button
              style={{
                display:"none",
                width: "70px",
                height: "70px",
                borderRadius: "100%",
                marginRight: "10px",
                
              }}
            ><Instagram width={45} height={45}/></Button>
          </div>
        </div>

        <div
          ref={imageRef}
          style={{
            flex: "3",
            alignSelf: "self-end",
            background: "url(" + urls.leftme + ")",
            height: "95%",
            backgroundSize: "110% 110%",
            backgroundBlendMode: "difference",
            backgroundPosition: "center",
            margin: "0 10px 10px 0",
          }}
        ></div>
      </div>
    </div>
  );
}

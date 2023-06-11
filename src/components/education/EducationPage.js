import { Badge } from "reactstrap";
import { VerticalSlider } from "../toolbox/SlickSlider";
import urls from "../../constants/urls";
import { useRef, useState } from "react";
import { ArrowCircle, React } from "../toolbox/CustomSvgs";

export default function EducationPage({ props }) {
let listRef=useRef()

    let educationList = [
        {
          title: "Bilgisayar muhendisliği lisans derecesi",
          description:
            "Gaziantep İslam Bilim Ve Teknoloji Üniversitesi | Mühendislik Ve Doğa Bilimleri Fakültesi ",
          inYears: "2021-2025",
          state: "pursuing",
          imgUrl: urls.education1,
        },
        {
          title: "Android Mobil Geliştirme",
          description:
            "BTK Akademi | Atıl Samancıoğlu | Temel ve ileri seviye mobil geliştirme egitimi ",
          inYears: "2022",
          state: "Complete",
          imgUrl: urls.AndroidEducation,
        },
        {
          title: "React İle Web Geliştirme",
          description:
            "BTK Akademi | Engin Demiroğ | React ile Web Geliştirme Eğitimi",
          inYears: "2023",
          state: "Complete",
          imgUrl: urls.ReactEducation,
        },
        
      ];

let createEducationJsx=()=>{
    return educationList.map((item, index) => (
        <div key={"education"+Math.random()} style={{height:"500px"}} className="py-4">
          <div className="d-flex justify-content-center align-items-center text-light flex-wrap" 
          style={{
           
          }}
          >
            <div style={{ flex:"1 1 500px", maxWidth: "500px" , maxHeight:"300px" }}>
              {item.imgUrl && (
                <img
                  style={{
                    borderRadius:
                      ((index + 1) % 2) * 50 +
                      "px" +
                      " " +
                      (1 - ((index + 1) % 2)) * 50 +
                      "px" +
                      " " +
                      ((index + 1) % 2) * 50 +
                      "px" +
                      " " +
                      (1 - (((index + 1) % 2))) * 50 +
                      "px",
                  }}
                  width="100%"
                  height="100%"
                  src={item.imgUrl}
                ></img>
              )}
            </div>
            <div className="ms-4 text-capitalize">
              <h5 className="">{item.title}</h5>
              <p>{item.description}</p>
              <Badge color="success">
                {item.inYears} | {item.state}
              </Badge>
            </div>
          </div>
        </div>
      ))
}

let [educationJSX,setEducationJSX]=useState(
    createEducationJsx()
)

 // window.onresize=()=>{setEducationJSX([...createEducationJsx()]);console.log("changed")}

 let scrollDown=(event)=>{
  
  let itemSize=500
  let newScrollTop=listRef.current.scrollTop;
  newScrollTop=(Math.floor(newScrollTop/itemSize)+1)*itemSize
  listRef.current.scroll({top:newScrollTop})
   }
  
   let scrollUp=(event)=>{
    let itemSize=500
    let newScrollTop=listRef.current.scrollTop;
    newScrollTop=(Math.floor(newScrollTop/itemSize)-1)*itemSize
    listRef.current.scroll({top:listRef.current.scrollTop-500})
     }
    
       
  return (
    <div
      id="EducationPage"
      style={{
        height: "90vh",
        background: "linear-gradient(0deg,#400052,#270053)",
        padding:"5% 0",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:"1%"
      }}
    >
     
    
     <div className="btn" onClick={scrollUp} ><ArrowCircle rotate={180}/></div>
     <div ref={listRef} className="hideScrollbar" 
     onLoad={(event)=>event.currentTarget.scroll({top:0})}
     style={{
        height:"90%",
        width:"100%",
        overflowX:"hidden",
        overflowY:"scroll",

      }}>
        {educationJSX}
      </div>
     <div className="btn" onClick={scrollDown}><ArrowCircle /></div>
     

    </div>
  );
}

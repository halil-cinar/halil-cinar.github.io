import { Collapse, Label, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import urls from "../../constants/urls";
import { useRef, useState } from "react";
export default function Navi({activeTab, ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    
const [activeTabId,setActiveTabId]=activeTab



    const toggle = () => setIsOpen(!isOpen);
    let activeTabStyle=(id)=>{
        return {borderBottom:activeTabId===id?"1px solid blue":"0",color: activeTabId===id?"blue":"#707070",fontStyle: "italic", marginRight: "10px", marginLeft: "10px",cursor:"pointer",transition:"500ms all"}
        
    }

    let setActiveTab=(event)=>{
        const {id} =event.target
        setActiveTabId(id)
    }

    

    let getNav=({props={},style={},className,textStyle})=>{
      return (
        <Nav {...props}  className={className||""}  style={{...style, color:"#707070"}}>
        <NavItem   onClick={
         ()=>{ document.getElementById("HomePage").scrollIntoView({behavior:"smooth"})
    }    }>
           <h4 id="tab1"  style={{...textStyle, ...activeTabStyle("tab1")}} onClick={setActiveTab}>Home</h4>
          </NavItem>
          <NavItem onClick={
           ()=>{ document.getElementById("AboutPage").scrollIntoView({behavior:"smooth"})
   }       }>
            <h4 id="tab2"  style={{...textStyle, ...activeTabStyle("tab2") }} onClick={setActiveTab}>About</h4>
          </NavItem>
          <NavItem onClick={
           ()=>{ document.getElementById("SkillsPage").scrollIntoView({behavior:"smooth"})
  }        }>
            <h4 id="tab3"  style={{...textStyle, ...activeTabStyle("tab3") }} onClick={setActiveTab}>Skills</h4>
          </NavItem>
          <NavItem onClick={
           ()=>{ document.getElementById("EducationPage").scrollIntoView({behavior:"smooth"})}
          }>
            <h4 id="tab4"  style={{...textStyle, ...activeTabStyle("tab4") }} onClick={setActiveTab}>Education</h4>
          </NavItem>
          <NavItem onClick={
           ()=>{ document.getElementById("ContactPage").scrollIntoView({behavior:"smooth"})
 }         }>
            <h4 id="tab5"  style={{...textStyle, ...activeTabStyle("tab5") }} onClick={setActiveTab}>Contact</h4>
          </NavItem>
        
          
        </Nav>
      )
    }
  return (
    <div>
      <Navbar expand="md" color="dark" className="d-flex justify-content-between border">
        <NavbarBrand>
          <img height="45px" className="" src={urls.logoUrl}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={false} navbar>     
{getNav({})}
        </Collapse>
        <Offcanvas
    direction="end"
    scrollable
    toggle={toggle}
    isOpen={isOpen}
    className="bg-dark"
    style={{maxWidth:"85vw"}}
 
  >
    <OffcanvasHeader style={{
      background:"url("+urls.logoUrl+")",
      backgroundSize:"90% 100%",
      backgroundClip:"padding-box",
  backgroundRepeat:"no-repeat"
    }}  toggle={toggle} color="success" >
   
    </OffcanvasHeader>
    <OffcanvasBody>
      {getNav({props:{vertical:true},textStyle:{fontSize:"34px",marginBottom:"15px 0"}})}
    </OffcanvasBody>
  </Offcanvas>
      </Navbar>
    </div>
  );
}

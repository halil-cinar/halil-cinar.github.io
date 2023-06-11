import { Button, Form, FormGroup, Input, InputGroup, InputGroupText } from "reactstrap";
import urls from "../../constants/urls";
import { useState } from "react";

export default function ContactPage({ ...props }) {
let [contactForm,setContactForm]=useState({
  name:"",
  surname:"",
  email:"",
  message:""
})


let onChange=(event)=>{
  setContactForm({...contactForm,[event.target.name]:event.target.value})
}

let onSubmit=(event)=>{
  event.preventDefault()
  window.location.href="mailto:halilcinar1260@gmail.com?subject=Merhaba İletişim Kurmak İstiyorum&body="+contactForm.message+"  \n  "+contactForm.name+" "+contactForm.surname+"  "+contactForm.email
  console.log(contactForm)
}



  return (
    <div
    id="ContactPage"
      style={{
        height: "90vh",
        background: "linear-gradient(180deg,#400052,#270053)",
        padding: "5% 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "95%",
          width: "90%",
          backgroundColor: "rgba(169,169,169,0.3)",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className=""
          style={{
            height: "98%",
            width: "80%",
            backgroundColor: "rgba(0,0,0,0.48)",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            className="py-3 "
            style={{
              flex: "1 1 200px",
              minHeight: "200px",
              maxHeight: "600px",
              height:
                props.pageSize.width > 973
                  ? props.pageSize.height * 0.9+""
                  : props.pageSize.height * 0.1+"px",
              minWidth: "150px",
              width:props.pageSize.width > 973
              ? props.pageSize.height * 0.5
              : props.pageSize.height * 0.1+"px",
              maxWidth:"60%",
          
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <img
            src={urls.rightme}
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                background: "url(" + urls.rightme + ")",
                backgroundSize: "100% 100%",
                backgroundPosition: "50% 50%",

                border: "5px solid darkblue",
                margin: "0px 20px",
               width:"100%",
               height:"100%",
              }}
            ></img>
          </div>

          <div className="" style={{ flex: "1 1 500px" }}>
            <div className="mx-4">
              <Form  onSubmit={onSubmit}>
                <InputGroup className="my-2 bg-dark " color="success">
                  <InputGroupText className="bg-dark text-light">
                    Name
                  </InputGroupText>
                  <Input

                  name="name"
                    type="text"
                    placeholder="name"
                    className="bg-dark text-light"
                    required
                    onChange={onChange}
                  />
                </InputGroup>

                <InputGroup className="my-2 bg-dark " color="success">
                  <InputGroupText className="bg-dark text-light">
                    Surname
                  </InputGroupText>
                  <Input
                  name="surname"
                    type="text"
                    placeholder="name"
                    className="bg-dark text-light"
                    required
                    onChange={onChange}
                  />
                </InputGroup>

                <InputGroup className="my-2 bg-dark " color="success">
                  <InputGroupText className="bg-dark text-light">
                    Eposta
                  </InputGroupText>
                  <Input
                  name="email"
                    type="email"
                    placeholder="name"
                    className="bg-dark text-light"
                    required
                    onChange={onChange}
                  />
                </InputGroup>

                <InputGroup className="my-2 bg-dark " color="success">
                  <InputGroupText className="bg-dark text-light " style={{width:"min-content",whiteSpace:"pre-wrap"}}>
                   Your message
                  </InputGroupText>
                  <textarea
                  name="message"
                    type="textarea"
                    placeholder="name"
                    className="bg-dark text-light form-control"
                    required
                    style={{height:"150px",resize:"none"}}
                    onChange={onChange}
                  />
                </InputGroup>
                 <Button
                 type="submit"
                className="btn"
                style={{
                  borderRadius: "50px",
                  background: "darkblue",
                  width: "min-content",
                  padding: "1px 50px 0 50px",
                  margin: "auto",
                  display: "block",
                }}
              >
                <h3
                  style={{
                    textTransform: "capitalize",
                    fontStyle: "italic",
                    fontWeight: "bolder",
                    color: "#707070",
                    textShadow:
                      "2px 2px white,-2px -2px white,-2px 2px white,2px -2px white",
                  }}
                >
                  Send
                </h3>
              </Button>
              </Form>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

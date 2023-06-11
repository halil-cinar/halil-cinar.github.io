import { useRef } from "react";
import urls from "../../constants/urls";
import { TypeAnimation } from "react-type-animation";
import TextAnimation from "../toolbox/TextAnimation";

export default function AboutPage({ props }) {

  const text = `Merhaba! Ben bir bilgisayar mühendisliği öğrencisiyim ve sizi burada karşılamaktan mutluluk duyuyorum. Adım Halil Çınar ve bilgisayarlarla ilgili her şeyi seviyorum!
Çocukluğumdan beri teknolojiye karşı büyük bir ilgim vardı ve bu ilgi beni bilgisayar mühendisliği alanında okumaya yönlendirdi. Bilgisayar Mühendisliği bölümünde okuyorum ve 2025 yılında mezun olmayı hedefliyorum.
Bilgisayar mühendisliği ile ilgili çok çeşitli projelerde yer aldım. Programlama dilleri konusunda uzmanlık kazandım ve Java ,JavaScript,C# , Kotlin  gibi dillerde deneyimim var. Ayrıca web ve mobil geliştirme gibi alanlarda React, Flutter  gibi  güncel teknolojilere de ilgi duyuyorum ve bunlarla ilgili de deneyimlerim oldu.
Ayrıca kendimi sürekli olarak geliştirmek için çabalıyorum. Kendi kendime öğrenme, yeni teknolojileri takip etme ve kendimi güncel tutma konusunda azimliyim. Aynı zamanda başkalarıyla bilgi paylaşmaktan da keyif alıyorum ve mesleğimi sürekli olarak ilerletmek için kendimi motive ediyorum.
Hakkımda daha fazla bilgi edinmek için portföy web sitesimi gezebilir veya benimle iletişim kurabilirsiniz.
Ekip çalışmasına, teknolojiye ve sürekli öğrenmeye olan tutkum ile gelecekteki projelerde başarılı olacağıma inanıyorum!`;

  return (
    <section
    id="AboutPage"
      style={{
        background: "url(" + urls.aboutMePageBackground + ")",
        height: "90vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="d-flex justify-content-between h-100">
        <div
         
          style={{
            flex: "3",
            alignSelf: "self-end",
            background: "url(" + urls.rightme + ")",
            height: "90%",
            backgroundSize: "110% 110%",
            backgroundBlendMode: "difference",
            backgroundPosition: "center",
            margin: "0 10px 10px 0",
          }}
        >
          
        </div>
        <div
          style={{
            flex: "5",
            padding: "10px",
            display: "grid",
            justifyContent: "center",
            color: "white",
          }}
        >
         
    /*<pre
            style={{
           
            whiteSpace:"break-spaces",
            fontWeight:"bolder",
            textAlign:"center",
            fontFamily:"sans-serif",
            fontStretch:"extra-condensed",
            fontStyle:"oblique",
            textShadow:" 3px 3px 2px rgba(0, 0, 0, 1)"
            }}
          > <TypeAnimation
          sequence={[text]}
          wrapper="span"
          cursor={true}
          speed={50}
          
          style={{ fontSize: '24px', color:"white",fontWeight:"700" }}
        />
           
          </pre>*/
        </div>
      </div>
    </section>
  );
}

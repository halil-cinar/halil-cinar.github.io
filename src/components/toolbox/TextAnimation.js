import { useEffect, useState } from "react";

export default function ({ sequence, ...props }) {
  var speed = 50;
  var [text, setTText] = useState("Merhaba beklllkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkn");
  let promise = null;
  useEffect(() => {
    runFunction(sequence);
  }, []);

var setText=(text)=>{
    console.log(text)
    setTText(text)
}

  var runFunction = (sequence) => {
    let stringIsRunning = false;
    let isWaiting = false;
    sequence.forEach((element) => {
      switch (typeof element) {
        case "string": {
          console.log("1");
          let index = 0;
          for (let i = 0; i < Math.min(element.length, text.length); i++) {
            if (element.charAt(i) == text.charAt(i)) {
              index += 1;
            } else {
              break;
            }
          }
          console.log("2  " + index);
          let i = text.length;

          var interval = setInterval(() => {
            if (i >= index) {
              stringIsRunning = false;
              clearInterval(interval);
            }
            setText(text.substring(0, i));
            i--;
            stringIsRunning = true;
            console.log("3 " + i);
          }, speed);

          setTimeout(() => {    
            stringIsRunning = true;
            let i = index;
            var interval = setInterval(() => {
              if (i >= element.length) {
                stringIsRunning = false;
                clearInterval(interval);
              }
              setText(element.substring(0, i));
              i++;
            }, speed);
          }, speed * (index - i));

          break;
        }

        case "number": {
          let time = Date.now();
          let interval = setInterval(() => {
            if (time + element < Date.now()) {
              clearInterval(interval);
            }
          }, 10);
          break;
        }
        case "function": {
          element();
          break;
        }
        default:
          console.log("undefiended");
      }
    });
  };

  return <p style={{  }} dangerouslySetInnerHTML={{__html:text}}></p>;
}

import { useRef, useState } from "react";
import FormSTyle from "./style/Form.module.css";
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();
  const [result, setResult] = useState(false);
  const Result = () => {
    return <h1>Thank you for contacting me</h1>;
  };

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v1qg5e9",
        "template_1hcpep1",
        form.current,
        "user_dsWWaopkUybPVDAqA7Hzh"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };
  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <div className={FormSTyle.wrapper}>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" required placeholder="Name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" required placeholder="Email" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" required placeholder="Message" />
        </div>
        <input type="submit" value="Send" />
      </form>
      {result && <Result />}
    </div>
  );
};

export default Form;

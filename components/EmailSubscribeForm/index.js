import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useRef } from "react";

export default function EmailSubscribeForm({ status, message, onValidated }) {
  const email = useRef(); 
  const name = useRef(); 

  const handleSubmit = () => {
    email &&
    name &&
    email.current.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.current.value,
      NAME: name.current.value
    });

  }

  return (
    <div className="w-96 bg-white text-black p-5 m-auto my-10 rounded-xl" id="email-signup">
        <form className="flex flex-col text-center" onSubmit={handleSubmit}>
          <h4 className="underline">Get notified when the next course drops!</h4>
          
          <label className="mb-5 " aria-label="name">
            Name:
            <input
              type="text"
              className="p-1 w-full text-black border border-black"
              ref={name}
              placeholder="Enter your name"
              aria-label="name input"
              required
              />
          </label>

          <label className="" aria-label="email">
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              // pattern="/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/"
              className="p-1 w-full text-black border border-black"
              aria-label="email input"
              required
              ref={email}
            />
          </label>
          <div>
            {status === "sending" && (
              <div style={{ color: "blue" }}>sending...</div>
            )}
            {status === "error" && (
              <div
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === "success" && (
              <div style={{ color: "green" }}>Subscribed !</div>
            )}
          </div>
          <input
            type="submit"
            value="Sign me up!"
            className="bg-violet-500 p-2 mt-5 font-bold animate-bounce text-white hover:cursor-pointer"
            aria-label="email sign up button"
          />
        </form>
        </div>
  );
}

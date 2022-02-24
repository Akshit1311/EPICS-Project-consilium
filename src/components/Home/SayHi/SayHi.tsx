import icons from "@assets/icons";
import PurpleButton from "@components/PurpleButton";
import React, { useState } from "react";
import Input from "./Input";

interface Form {
  fullName: string;
  lookingFor: string;
  message: string;
}

const SayHi: React.FC = () => {
  const [form, setForm] = useState<Form>({
    fullName: "",
    lookingFor: "",
    message: "",
  });

  const data = [
    {
      name: "fullName",
      label: "My name is",
      placeholder: "Full Name",
      value: form.fullName,
      isTextArea: false,
    },
    {
      name: "lookingFor",
      label: "I'm looking for",
      placeholder: "What you love",
      value: form.lookingFor,
      isTextArea: false,
    },
    {
      name: "message",
      label: "Your Message",
      placeholder: "i want to say that...",
      value: form.message,
      isTextArea: true,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="mx-8 mt-32 grid grid-cols-3 overflow-hidden rounded-xl border-2 border-white bg-[#12181B] text-white">
      <div className="col-span-2 p-8">
        <div className="mb-2 text-3xl font-bold">Say Hi!</div>
        <div className="text-sm">We’d like to talk with you.</div>

        <form className="mt-16">
          {data.map(({ name, label, placeholder, value, isTextArea }, index) => (
            <Input
              key={index}
              name={name}
              label={label}
              placeholder={placeholder}
              value={value}
              isTextArea={isTextArea}
              onChange={handleChange}
            />
          ))}

          <PurpleButton>Send Message</PurpleButton>
        </form>
      </div>
      <div className="grid place-items-center bg-[url('/Home/formBg.png')] pl-8">
        <div className="text-white">
          <div className="text-3xl">Contact Information</div>
          <div>
            Fill up the form and our Team will get back to
            <br />
            you within 24 hours.
          </div>

          <div className="my-8">
            <div className="my-4 flex items-center">
              <div>{icons.phone}</div>
              +91 1234567890
            </div>
            <div className="my-4 flex items-center">
              <div>{icons.envelope}</div>
              hello@consillium.com
            </div>
            <div className="my-4 flex items-center">
              <div>{icons.local}</div>
              Address,Address,123456
            </div>
          </div>
          <div className="flex gap-8">
            {["fb", "tw", "ig"].map((icon) => (
              <div key={icon}>{icons[icon]}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SayHi;

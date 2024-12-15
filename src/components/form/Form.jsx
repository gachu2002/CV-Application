/* eslint-disable react/prop-types */
import { useState } from "react";
import rightArrow from "../../assets/icons/rightArrow.png";


function FormField({ label, type = "text", name }) {
  return (
    <div className="formField flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} className="w-3/4 p-1.5 rounded-lg focus:border-lime-300 border-solid border-[1px]"/>
    </div>
  );
}

function fieldList(fields) {
  return fields.map((field) => {
    return <FormField key={field.name} {...field} />;
  });
}

function Form({ heading, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id={heading.name + "-form"} className="form">
      <div
        className="heading flex cursor-pointer items-center bg-slate-700 p-4"
        onClick={toggleContent}
      >
        <img src={heading.icon} alt="" />
        <h2>{heading.name}</h2>
        <img
          src={rightArrow}
          alt="arrow"
          className={
            "ml-auto h-5 w-5 transition-transform" + (isOpen && " rotate-90")
          }
        />
      </div>
      {isOpen && (
        <form className="content flex flex-col gap-4 bg-gray-500 p-4">
          {fieldList(content)}
        </form>
      )}
    </section>
  );
}

export default Form;

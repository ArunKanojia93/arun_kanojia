import { IconCodeDots } from "@tabler/icons-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string | null;
  message: string;
}
const Contact = () => {
  const formData: FormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [form, setForm] = useState<FormData>(formData);

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <div id="contact" className="flex justify-center pt-28 px-8 md:px-32 3xl:px-0 items-center w-full">
      <div className="flex flex-col items-center w-full max-w-screen-2xl">
        <div className="text-5xl font-bold text-primary pb-20">Contact</div>

        <div data-aos="flip-right" data-aos-easing="ease-in-out" data-aos-duration="500" className="rounded-2xl w-full max-w-5xl bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 shadow-[0_0_4px_0] shadow-primary">
          <div className="bg-background rounded-2xl px-6 py-4">
            <div className="text-foreground text-3xl font-black mb-6 flex gap-2 items-center">
              Let&apos;s Connect <IconCodeDots stroke={2.5} size={32} className="text-primary" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8">
              <FloatingInput handleChange={handleChange} value={form.name} label="Name" />
              <FloatingInput handleChange={handleChange} value={form.email} label="Email" />
              <FloatingInput handleChange={handleChange} value={form.phone!} label="Phone Number" />
              <FloatingInput handleChange={handleChange} value={form.message} label="Message" />

              <button type="submit" className="bg-foreground text-background rounded-lg px-4 py-2 shadow-[0_0_4px_0] shadow-primary font-bold hover:shadow-[0_0_6px_2px] hover:shadow-primary transition-all duration-300 active:bg-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingInput = ({ label, value, handleChange }: { label: string; value: string; handleChange: (name: string, value: string) => void }) => {
  return (
    <div className="relative">
      {label === "Message" ? (
        <textarea
          rows={4}
          className="block px-2.5 pb-2.5 pt-4 w-full shadow-[0_0_4px_0] shadow-primary text-lg text-foreground bg-background rounded-lg appearance-none focus:bg-background focus:outline-none focus:ring-0 focus:shadow-[0_0_4px_2px] focus:shadow-primary peer"
          placeholder=""
        />
      ) : (
        <input
          onChange={(e) => handleChange(label.toLocaleLowerCase(), e.target.value)}
          value={value}
          type="text"
          id={label}
          className="block px-2.5 pb-2.5 pt-4 w-full shadow-[0_0_4px_0] shadow-primary text-lg text-foreground bg-background rounded-lg appearance-none focus:outline-none focus:ring-0 focus:shadow-[0_0_4px_2px] focus:shadow-primary peer"
          placeholder=""
        />
      )}
      <label
        htmlFor={label}
        className={`absolute text-lg text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${
          label === "Message" ? "peer-placeholder-shown:top-5" : "peer-placeholder-shown:top-1/2"
        } peer-focus:top-1 peer-focus:scale-75 rounded-md peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
      >
        {label}
      </label>
    </div>
  );
};

export default Contact;

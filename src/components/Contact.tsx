import { useState } from "react";

import toast, { ToastPosition } from "react-hot-toast";

import { IconArrowRight, IconCodeDots } from "@tabler/icons-react";

interface FormData {
  id: string;
  name: string;
  email: string;
  phone: string | undefined;
  message: string;
}
const Contact = () => {
  const formData: FormData = {
    id: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [form, setForm] = useState<FormData>(formData);
  const [formError, setFormError] = useState<FormData>(formData);
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = (id: string, value: string) => {
    switch (id) {
      case "name":
        return value.length === 0 || value.length < 3 ? "Name must be at least 3 characters long" : "";
      case "email":
        return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : "";
      case "phone":
        return value.length > 0 && !/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/i.test(value) ? "Invalid phone number" : "";
      case "message":
        return value.length < 10 ? "Message must be at least 10 characters long" : "";
      default:
        return "";
    }
  };

  const handleChange = (id: string, value: string) => {
    setForm({ ...form, [id]: value });
    setFormError({ ...formError, [id]: validateForm(id, value) });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const toastOptions = {
      position: "bottom-right" as ToastPosition,
      duration: 4000,
    };
    setLoading(true);
    e.preventDefault();
    if (
      Object.values(formError).some((value) => value !== "") ||
      Object.keys(form)
        .filter((key) => key === "message")
        .some((key) => form[key] === "")
    ) {
      toast.error("Please fill in all the required fields", toastOptions);
      setLoading(false);
      return;
    }

    try {
      const formSubmitData = new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone!,
        message: form.message,
      });

      await fetch(process.env.NEXT_PUBLIC_SHEET_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formSubmitData,
      });

      setFormError(formData);
      setForm(formData);

      setLoading(false);

      toast.success("Message sent successfully", toastOptions);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
      toast.error("Error sending message", toastOptions);
    }
  };

  return (
    <div id="contact" className="flex justify-center pt-28 px-8 md:px-16 xl:px-32 3xl:px-0 items-center w-full">
      <div className="flex flex-col items-center w-full max-w-screen-2xl">
        <div className="text-5xl font-bold text-primary pb-20">Contact</div>

        <div data-aos="flip-right" className="rounded-2xl w-full max-w-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 shadow-[0_0_4px_0] shadow-primary">
          <div className="bg-background rounded-2xl px-6 py-4">
            <div className="text-foreground text-3xl font-black mb-6 flex gap-2 items-center">
              Let&apos;s Connect <IconCodeDots stroke={2.5} size={32} className="text-primary" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {Object.keys(form).map(
                (key) =>
                  key !== "id" && (
                    <FloatingInput
                      key={key}
                      id={key}
                      name={key}
                      value={form[key as keyof FormData]}
                      handleChange={(id, value) => handleChange(id, value)}
                      error={formError[key as keyof FormData]}
                    />
                  )
              )}

              <button
                disabled={
                  loading ||
                  Object.values(formError).some((value) => value !== "") ||
                  Object.keys(form)
                    .filter((key) => key === "message")
                    .some((key) => form[key] === "")
                }
                type="submit"
                className="flex items-center gap-2 justify-center bg-foreground text-background rounded-lg px-4 py-2 shadow-[0_0_4px_0] shadow-primary font-bold hover:shadow-[0_0_6px_2px] hover:shadow-primary transition-all duration-300 active:bg-primary disabled:cursor-not-allowed disabled:shadow-none disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send"} <IconArrowRight stroke={2.5} size={24} className={`text-background ${loading ? "animate-pulse" : ""}`} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingInput = ({
  id,
  name,
  value,
  handleChange,
  error,
}: {
  id: string;
  name: string;
  value?: string;
  handleChange: (id: string, value: string) => void;
  error?: string;
}) => {
  return (
    <div>
      <div className="relative">
        {id === "message" ? (
          <textarea
            id={id}
            value={value}
            onChange={(e) => handleChange(id, e.target.value)}
            rows={4}
            className="block px-2.5 pb-2.5 pt-4 w-full shadow-[0_0_4px_0] shadow-primary text-lg text-foreground bg-background rounded-lg appearance-none focus:bg-background focus:outline-none focus:ring-0 focus:shadow-[0_0_4px_2px] focus:shadow-primary peer"
            placeholder=""
          />
        ) : (
          <input
            onChange={(e) => handleChange(id, e.target.value)}
            value={value}
            type="text"
            id={id}
            className="block px-2.5 pb-2.5 pt-4 w-full shadow-[0_0_4px_0] shadow-primary text-lg text-foreground bg-background rounded-lg appearance-none focus:outline-none focus:ring-0 focus:shadow-[0_0_4px_2px] focus:shadow-primary peer"
            placeholder=""
          />
        )}
        <label
          htmlFor={name}
          className={`absolute text-lg text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${
            id === "message" ? "peer-placeholder-shown:top-5" : "peer-placeholder-shown:top-1/2"
          } peer-focus:top-1 peer-focus:scale-75 rounded-md peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 capitalize`}
        >
          {name}
          {id === "phone" ? "" : "*"}
        </label>
      </div>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
};

export default Contact;

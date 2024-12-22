import { useState } from "react";
import InputText from "../components/form/InputText";
import InputImage from "../components/form/InputImage";
import { Button } from "../components/form/Button";
import { useNavigate } from "react-router";

export default function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [image, setImage] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    let validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    }

    if (!github) {
      validationErrors.github = "Github is required";
    }

    if (!image) {
      validationErrors.image = "Image is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    navigate("/ticket", {
      state: {
        name,
        email,
        github,
        image,
      },
    });
  };

  return (
    <>
      <div className="header-form">
        <p className="title">Your Journey to Coding Conf 2025 Starts Here!</p>
        <p className="subtitle">
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <InputImage
          onChange={(e) => setImage(e.target.files[0])}
          label="Upload Avatar"
          caption="Upload your photo (JPG or PNG, max size 500KB)"
          error={errors.image}
        />
        <InputText
          label="Full Name"
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
        <InputText
          label="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          error={errors.email}
        />
        <InputText
          label="Github Username"
          onChange={(e) => setGithub(e.target.value)}
          placeholder="yourusername"
          error={errors.github}
        />

        <Button title={"Generate My Ticket"} />
      </form>
    </>
  );
}

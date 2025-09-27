import React, { useState } from "react";
import StarBorder from "@/components/StarBorder";

const PersonalDetails: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    areaOfHelp: "",
    caseDescription: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName) e.firstName = "First name is required";
    if (!form.lastName) e.lastName = "Last name is required";
    if (!form.dob) e.dob = "Date of birth is required";
    if (!form.email) e.email = "Email is required";
    if (!form.areaOfHelp) e.areaOfHelp = "Please select an area of help";
    if (!form.caseDescription) e.caseDescription = "Please describe your court case";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Personal details submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Personal details received</h1>
        <p>Thank you — your personal details have been saved. You can continue with the application process.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Personal details</h1>
      <p>Please fill in your personal information and details about the case.</p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 900 }}>
        <label>
          Name
          <input name="firstName" value={form.firstName} onChange={handleChange} />
          {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
        </label>

        <label>
          Last name
          <input name="lastName" value={form.lastName} onChange={handleChange} />
          {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
        </label>

        <label>
          Date of Birth
          <input type="date" name="dob" value={form.dob} onChange={handleChange} />
          {errors.dob && <div style={{ color: "red" }}>{errors.dob}</div>}
        </label>

        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </label>

        <label>
          Area of help
          <select name="areaOfHelp" value={form.areaOfHelp} onChange={handleChange}>
            <option value="">-- select area --</option>
            <option value="family">Family law</option>
            <option value="immigration">Immigration</option>
            <option value="employment">Employment</option>
            <option value="housing">Housing</option>
            <option value="other">Other</option>
          </select>
          {errors.areaOfHelp && <div style={{ color: "red" }}>{errors.areaOfHelp}</div>}
        </label>

        <label>
          Description of court case
          <textarea name="caseDescription" value={form.caseDescription} onChange={handleChange} rows={6} />
          {errors.caseDescription && <div style={{ color: "red" }}>{errors.caseDescription}</div>}
        </label>

        <div>
          <StarBorder as="button" type="submit" className="custom-class" color="cyan" speed="5s">Save personal details</StarBorder>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;

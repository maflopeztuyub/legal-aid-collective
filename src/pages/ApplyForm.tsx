import React, { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  password: string;
  confirmPassword: string;
  status: string; // unemployed, student, employed but with proved financial hardship, other
  statusOther?: string;
  caseDescription: string;
  chronologicalHistory: string;
  actionsTaken: string;
  materials: string; // links or description
  previousLegalFigures: string;
  reasonForChange: string;
  expectations: string;
  previousLawyersEmails: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  password: "",
  confirmPassword: "",
  status: "",
  statusOther: "",
  caseDescription: "",
  chronologicalHistory: "",
  actionsTaken: "",
  materials: "",
  previousLegalFigures: "",
  reasonForChange: "",
  expectations: "",
  previousLawyersEmails: "",
};

const ApplyForm: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!form.firstName) errs.firstName = "First name is required";
    if (!form.lastName) errs.lastName = "Last name is required";
    if (!form.dob) errs.dob = "Date of birth is required";
    if (!form.email) errs.email = "Email is required";
    if (!form.password) errs.password = "Password is required";
    if (form.password !== form.confirmPassword) errs.confirmPassword = "Passwords do not match";
    if (!form.status) errs.status = "Please select your status";
    if (form.status === "other" && !form.statusOther) errs.statusOther = "Please specify your condition";
    if (!form.caseDescription) errs.caseDescription = "Please describe your court case";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // placeholder: submit to API or save in state
    console.log("Application payload:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Application submitted</h1>
        <p>Thank you. Your application has been submitted and will be reviewed.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Apply for Legal Assistance</h1>
      <p>Please fill the following form. There is no word count limit; be as specific as possible.</p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 900 }}>
        <section>
          <h2>Personal Information & Family Status</h2>
          <p>
            This section collects essential information about the primary user and their family members to understand the full scope of individuals who may be affected by the legal case.
          </p>

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
            Password
            <input type="password" name="password" value={form.password} onChange={handleChange} />
            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
          </label>

          <label>
            Confirm password
            <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <div style={{ color: "red" }}>{errors.confirmPassword}</div>}
          </label>

          <label>
            Status
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="">-- select --</option>
              <option value="unemployed">unemployed</option>
              <option value="student">student</option>
              <option value="employed_hardship">employed but with proved financial hardship</option>
              <option value="other">Other</option>
            </select>
            {errors.status && <div style={{ color: "red" }}>{errors.status}</div>}
          </label>

          {form.status === "other" && (
            <label>
              Please specify
              <input name="statusOther" value={form.statusOther} onChange={handleChange} />
              {errors.statusOther && <div style={{ color: "red" }}>{errors.statusOther}</div>}
            </label>
          )}
        </section>

        <section>
          <h2>Court case details</h2>

          <label>
            Describe your court case (be as specific as possible)
            <textarea name="caseDescription" value={form.caseDescription} onChange={handleChange} rows={6} />
            {errors.caseDescription && <div style={{ color: "red" }}>{errors.caseDescription}</div>}
          </label>

          <label>
            Chronological history of the court case
            <textarea name="chronologicalHistory" value={form.chronologicalHistory} onChange={handleChange} rows={6} />
          </label>

          <label>
            If the court case is ongoing for years, describe actions you took and the challenges faced
            <textarea name="actionsTaken" value={form.actionsTaken} onChange={handleChange} rows={6} />
          </label>

          <label>
            Provide any electronic or multimedia material links you have available regarding your case
            <textarea name="materials" value={form.materials} onChange={handleChange} rows={3} />
          </label>

          <label>
            Insert the name of all legal figures who supported you in the process
            <textarea name="previousLegalFigures" value={form.previousLegalFigures} onChange={handleChange} rows={3} />
          </label>

          <label>
            Describe the reason for your current change of lawyer (if multiple changes, describe each)
            <textarea name="reasonForChange" value={form.reasonForChange} onChange={handleChange} rows={4} />
          </label>

          <label>
            Describe what action you expect from your next lawyer, expected results and timeframe
            <textarea name="expectations" value={form.expectations} onChange={handleChange} rows={4} />
          </label>

          <label>
            Copy here the email of previous lawyers who can be contacted for confirmation
            <input name="previousLawyersEmails" value={form.previousLawyersEmails} onChange={handleChange} />
          </label>
        </section>

        <div>
          <button type="submit">Submit application</button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;

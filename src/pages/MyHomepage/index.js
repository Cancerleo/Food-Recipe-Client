import React from "react";
import MyHomepageSettingForm from "../../components/MyHomepageSettingForm";
import { Button } from "react-bootstrap";

export default function MyHomepage() {
  return (
    <div style={{ padding: "0 50px" }}>
      <h2>Personal Data</h2>
      <br />
      <MyHomepageSettingForm />
      <Button className="mb-2" variant="success">
        Save
      </Button>
    </div>
  );
}

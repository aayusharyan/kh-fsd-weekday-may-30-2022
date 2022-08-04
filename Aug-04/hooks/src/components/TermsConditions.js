import { useState } from "react";

const TermsConditions = () => {
  const [isChecked, setChecked] = useState(false);

  const setCheckbox = e => {
    setChecked(e.target.value);
  }

  return <>
    <input type="checkbox" onChange={setCheckbox} /> Terms and Conditions
    <br />
    <br />
    <p>Status: Terms and conditions are {isChecked ? "Accepted" : "Declined"}.</p>
  </>
}

export default TermsConditions;
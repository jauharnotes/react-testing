import React, { useState } from "react";

const CompUserEvent = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <p>Anda mengetik {value}</p>
      <input
        placeholder="input value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p data-testid="text-submit" onClick={onSubmit}>
        Submit
      </p>
    </div>
  );
};

export default CompUserEvent;

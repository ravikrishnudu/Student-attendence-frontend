import axios from "axios";
import React, { useState, useEffect } from "react";

async function getAttendance() {
  const response = await axios.get("/attendance");
  return response.data;
}
function RecodedAttedance() {
  const [attendance, setattendance] = useState("");

  useEffect(() => {
    getAttendance().then((res) => {
      setattendance(res);
    });
  }, []);
  console.log(attendance);

  return (
    <div>
      <div>recoded</div>
    </div>
  );
}

export default RecodedAttedance;

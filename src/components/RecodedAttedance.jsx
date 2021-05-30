import React, { useState, useEffect } from "react";

async function getAttendance() {
  return fetch("http://localhost:8000/attendance").then((res) => {
    console.log(res);

    return res.json();
  });
}
function RecodedAttedance() {
  const [attendance, setattendance] = useState("");

  useEffect(() => {
    getAttendance().then((attendance) => {
      setattendance(attendance);
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

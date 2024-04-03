import React, { useEffect } from "react";

export default function LoginSuccessPage() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 100);
  }, []);
  return <div>You are now Logged in</div>;
}

import React from "react";

export function AdminLayout(props) {
  const { children } = props;
  return (
    <div>
      <h1>Se esta usando el admin layout</h1>
      {children}
    </div>
  );
}

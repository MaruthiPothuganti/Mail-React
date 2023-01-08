import React from "react";
import "./MailHeader.css";
import { CgMenuGridR } from "react-icons/cg";

export const MailHeader = () => {
  return (
    <div className="header">
      <CgMenuGridR color="white" size={48} />
      <h1 className="title">Outlook Mail</h1>
    </div>
  );
};

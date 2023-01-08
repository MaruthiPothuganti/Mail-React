import React from "react";
import "./homepage.css";
import { Folders, Mails, MailContent, MailHeader } from "../Components";

export const HomePage = () => {
  return (
    <main>
      <header>
        <MailHeader />
      </header>
      <section className="mainSection">
        <Folders />
        <Mails />
        <MailContent />
      </section>
    </main>
  );
};

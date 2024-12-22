import { useLocation } from "react-router";
import Ticket from "../components/ticket/Ticket";
import { motion } from "motion/react";

export default function TicketPage() {
  const location = useLocation();

  const { name, email, github, image } = location.state;

  console.log(location);
  return (
    <section className="ticket">
      <div className="header-ticket">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Congrats, <span className="name">{name}</span>! Your ticket is ready.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="subtitle"
        >
          We've emailed your ticket to <span className="email">{email}</span>{" "}
          and will send updates in the run up to the event.
        </motion.p>
      </div>
      <Ticket name={name} github={github} avatarImage={image} />
    </section>
  );
}

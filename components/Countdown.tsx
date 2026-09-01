"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-27T19:00:00-05:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  let diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86400000);
  diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000);
  diff -= hours * 3600000;
  const mins = Math.floor(diff / 60000);
  diff -= mins * 60000;
  const secs = Math.floor(diff / 1000);
  return { days, hours, mins, secs };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const { days, hours, mins, secs } = time;

  return (
    <div className="grid grid-cols-4 gap-2 font-tag text-center">
      {[
        { value: pad(days), label: "Days" },
        { value: pad(hours), label: "Hrs" },
        { value: pad(mins), label: "Min" },
        { value: pad(secs), label: "Sec" },
      ].map(({ value, label }) => (
        <div key={label}>
          <div className="text-2xl font-display text-cream-100">{value}</div>
          <div className="text-[10px] uppercase text-cream-100/50">{label}</div>
        </div>
      ))}
    </div>
  );
}

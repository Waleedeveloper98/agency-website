import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      <TimerItem value={timeLeft.days} label="Days" />
      <TimerItem value={timeLeft.hours} label="Hrs" />
      <TimerItem value={timeLeft.minutes} label="Mins" />
      <TimerItem value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

const TimerItem = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-black text-white rounded-xl flex items-center justify-center font-black text-2xl md:text-3xl shadow-xl">
      {value.toString().padStart(2, "0")}
    </div>
    <span className="text-[10px] uppercase font-black tracking-widest mt-2 opacity-40">
      {label}
    </span>
  </div>
);

export default CountdownTimer;

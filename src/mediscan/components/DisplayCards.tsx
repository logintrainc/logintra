import React from 'react';
import { cn } from '../../lib/utils';
import { Pill, Bell, CheckCircle } from 'lucide-react';

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconBg?: string;
  titleColor?: string;
}

function DisplayCard({
  className,
  icon = <Pill className="size-4 text-cyan-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconBg = "bg-brand-primary",
  titleColor = "text-brand-accent",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-[10rem] w-[30rem] -skew-y-[17deg] select-none flex-col justify-between rounded-xl bg-white/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-white after:to-transparent after:content-[''] hover:bg-white [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className={cn("relative inline-block rounded-full p-1", iconBg)}>
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleColor)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg">{description}</p>
      <p className="text-gray-500">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      icon: <Pill className="size-4 text-cyan-300" />,
      title: "Medication Saved",
      description: "Amoxicillin 500mg added",
      date: "2 min ago",
      iconBg: "bg-brand-accent",
      titleColor: "text-brand-accent",
      className: "[grid-area:stack] hover:-translate-y-4 before:absolute before:w-[100%] before:rounded-xl before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Bell className="size-4 text-amber-300" />,
      title: "Reminder",
      description: "Take your evening dose",
      date: "30 min ago",
      iconBg: "bg-amber-500",
      titleColor: "text-amber-600",
      className: "[grid-area:stack] translate-x-8 translate-y-8 hover:translate-y-4 before:absolute before:w-[100%] before:rounded-xl before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <CheckCircle className="size-4 text-green-300" />,
      title: "Scan Complete",
      description: "No conflicts detected",
      date: "1 hour ago",
      iconBg: "bg-green-500",
      titleColor: "text-green-600",
      className: "[grid-area:stack] translate-x-16 translate-y-16 hover:translate-y-12",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}

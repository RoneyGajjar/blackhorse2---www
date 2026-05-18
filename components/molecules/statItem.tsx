interface StatItemProps {
  value: string;
  label: string;
}

export const StatItem = ({ value, label }: StatItemProps) => (
  <div className="py-4 md:py-0">
    <p className="font-display-lg text-4xl md:text-5xl font-bold mb-2">{value}</p>
    <p className="font-label-md text-primary-fixed-dim uppercase tracking-widest">{label}</p>
  </div>
);
interface MetricBadgeProps {
  label: string;
  className?: string;
}

const MetricBadge = ({ label, className = "" }: MetricBadgeProps) => {
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium glass border border-primary/20 text-primary ${className}`}>
      <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></div>
      {label}
    </div>
  );
};

export default MetricBadge;
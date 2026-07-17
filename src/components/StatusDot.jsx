export default function StatusDot({ color = "online", size = "sm", pulse = true }) {
  const colorMap = {
    online: "bg-accent-online shadow-[0_0_10px_rgba(52,211,153,0.7)]",
    pending: "bg-accent-pending shadow-[0_0_10px_rgba(251,191,36,0.7)]",
    info: "bg-accent-info shadow-[0_0_10px_rgba(56,189,248,0.7)]",
  };
  const sizeMap = {
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
  };
  return (
    <span className="relative inline-flex">
      {pulse && (
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${
            color === "online" ? "bg-accent-online" : color === "pending" ? "bg-accent-pending" : "bg-accent-info"
          }`}
        />
      )}
      <span className={`relative inline-flex rounded-full ${sizeMap[size]} ${colorMap[color]}`} />
    </span>
  );
}

export const Button = ({
  label,
  icon,
  onClick,
  className,
  variant = "primary",
  disabled = false,
}) => {
  const variants = {
    primary:
      "py-250 px-300 rounded-8 border-2 border-nuetral-900 bg-light-salmon-50 flex items-center gap-200 text-sm font-semibold uppercase font-martian-mono hover:bg-gradient ",
    secondary:
      "py-250 px-300 rounded-8 border-2 border-nuetral-0 bg-transparent flex items-center gap-200 text-sm font-semibold uppercase font-martian-mono text-neutral-0 heh",
  };
  return (
    <button
      className={`${className} ${variants[variant]} `}
      disabled={disabled}
      onClick={() => onClick && onClick()}
    >
      {label && <span>{label}</span>}
      {icon && <span>{icon}</span>}
    </button>
  );
};

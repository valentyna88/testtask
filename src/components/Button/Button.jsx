const Button = ({
  href,
  children,
  className = "",
  disabled = false,
  type = "button",
  ...rest
}) => {
  const classes = ["btn", disabled && "is-disabled", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        className={classes}
        href={disabled ? undefined : href}
        aria-disabled={disabled ? "true" : undefined}
        tabIndex={disabled ? -1 : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;

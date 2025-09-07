interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

function Button({ 
  children, 
  className = "", 
  variant = "primary", 
  ...props 
}: ButtonProps) {
  const base = "px-4 py-2 rounded-xl font-medium transition shadow-md";
  const variants = {
    primary: "bg-primary text-white hover:bg-indigo-600 dark:bg-accent dark:hover:bg-pink-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
    ghost: "bg-transparent text-primary hover:bg-indigo-100 dark:text-accent dark:hover:bg-pink-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;

export function ScreenTitle({ children, ...props }) {
  return (
    <h2 className="text-center" {...props}>
      {children}
    </h2>
  );
}

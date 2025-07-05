import "./auth.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="login_authBg">
      <video autoPlay muted loop playsInline className="login_videoBg">
        <source src="/assets/video/auth/auth.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login_formWrapper">{children}</div>
    </div>
  );
}

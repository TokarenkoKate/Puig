import "./auth.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth">
      <video autoPlay muted loop playsInline className="auth__video-bg">
        <source src="/assets/video/auth/auth.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
}

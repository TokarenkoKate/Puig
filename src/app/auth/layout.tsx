import { VideoComponent } from "@/components/custom/video-component/video-component";
import "./auth.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth">
      <VideoComponent
        autoPlay
        muted
        loop
        playsInline
        src="/assets/video/auth/auth.mp4"
        className="auth__video-bg"
      />
      {children}
    </div>
  );
}

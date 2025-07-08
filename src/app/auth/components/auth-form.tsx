import { Logo } from "@/components/custom/logo/logo";
import Image from "next/image";
import Link from "next/link";

type AutFormLayoutProps = {
  submitText: string;
  linkText: string;
  children: React.ReactNode;
};

export function AutFormLayout({
  children,
  submitText,
  linkText,
}: AutFormLayoutProps) {
  return (
    <div className="auth-form">
      <div className="auth-form__header">
        <Image
          alt="PUIG Logo"
          loading="lazy"
          width="149"
          height="170"
          decoding="async"
          className="auth-form__icon-logo"
          src="/assets/images/logo-icon.webp"
        />
        <Logo />
      </div>
      <form>
        {children}
        <button type="submit" className="auth-form__submit-btn">
          {submitText}
        </button>
      </form>
      <Link className="auth-form__link" href="/auth/registration">
        {linkText}
      </Link>
      <div>
        <div className="auth-form__social-btns">
          <button className="auth-form__social-btn">
            <div className="auth-form__social-btn-bg">
              <Image
                alt="PUIG VK"
                loading="lazy"
                width="22"
                height="12"
                decoding="async"
                className="auth-form__social-btn-icon"
                src="/assets/images/auth/vk.svg"
              />
            </div>
          </button>
          <button className="auth-form__social-btn">
            <div className="auth-form__social-btn-bg">
              <Image
                alt="PUIG OK"
                loading="lazy"
                width="12"
                height="20"
                decoding="async"
                className="auth-form__social-btn-icon w-[15px]"
                src="/assets/images/auth/ok.svg"
              />
            </div>
          </button>
          <button className="auth-form__social-btn">
            <div className="auth-form__social-btn-bg">
              <Image
                alt="PUIG Yandex"
                loading="lazy"
                width="11"
                height="16"
                decoding="async"
                className="auth-form__social-btn-icon w-[15px]"
                src="/assets/images/auth/yandex.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

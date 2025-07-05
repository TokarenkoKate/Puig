import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="login_formWrapper__gk2sY">
      <div className="flex items-center mb-1">
        <Image
          alt="PUIG Logo"
          loading="lazy"
          width="149"
          height="170"
          decoding="async"
          className="login_animationLogo"
          src="/assets/images/logo-icon.webp"
        />
        <Image
          alt="PUIG Logo"
          loading="lazy"
          width="205"
          height="62"
          decoding="async"
          className="login_logo"
          src="/assets/images/logo.webp"
        />
      </div>
      <form>
        <label className="login_label">
          <input
            type="email"
            className="login_input"
            required
            placeholder="Ваш E-mail"
            name="email"
            value=""
          />
        </label>
        <label className="login_label">
          <input
            type="password"
            className="login_input"
            required
            placeholder="Пароль"
            name="password"
            value=""
          />
        </label>
        <button type="submit" className="login_loginButton">
          Войти
        </button>
      </form>
      <Link className="login_registerLink" href="/auth/registration">
        Зарегистрироваться
      </Link>
      <div>
        <div className="login_socialButtons">
          <button className="login_socialButton">
            <div className="login_socialBg">
              <Image
                alt="PUIG VK"
                loading="lazy"
                width="22"
                height="12"
                decoding="async"
                className="login_socialIcon"
                src="/assets/images/auth/vk.svg"
              />
            </div>
          </button>
          <button className="login_socialButton">
            <div className="login_socialBg">
              <Image
                alt="PUIG OK"
                loading="lazy"
                width="12"
                height="20"
                decoding="async"
                className="login_socialIcon w-[15px]"
                src="/assets/images/auth/ok.svg"
              />
            </div>
          </button>
          <button className="login_socialButton">
            <div className="login_socialBg">
              <Image
                alt="PUIG Yandex"
                loading="lazy"
                width="11"
                height="16"
                decoding="async"
                className="login_socialIcon w-[15px]"
                src="/assets/images/auth/yandex.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

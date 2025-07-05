import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="register_formWrapper">
      <div className="flex items-center mb-1">
        <Image
          alt="PUIG Logo"
          loading="lazy"
          width="149"
          height="170"
          decoding="async"
          data-nimg="1"
          className="register_animationLogo"
          src="/assets/images/logo-icon.webp"
        />
        <Image
          alt="PUIG Logo"
          loading="lazy"
          width="205"
          height="62"
          decoding="async"
          data-nimg="1"
          className="register_logo"
          src="/assets/images/logo.webp"
        />
      </div>
      <div>
        <form>
          <div className="register_selectWrapperCustom">
            <div className="register_selectedValue">Золотое яблоко</div>
            <div className="register_arrow"></div>
          </div>
          <label className="register_label">
            <input
              required
              className="register_input"
              placeholder="Полное имя"
              type="text"
              value=""
              name="name"
            />
          </label>
          <label className="register_label">
            <input
              required
              className="register_input"
              placeholder="Ваш E-mail"
              type="email"
              value=""
              name="email"
            />
          </label>
          <label className="register_label">
            <input
              required
              className="register_input"
              placeholder="Пароль"
              type="password"
              value=""
              name="password"
            />
          </label>
          <label className="register_label">
            <input
              required
              className="register_input"
              placeholder="Повторите пароль"
              type="password"
              value=""
              name="confirmPassword"
            />
          </label>
          <button type="submit" className="register_loginButton">
            Зарегистрироваться
          </button>
        </form>
        <Link className="register_registerLink" href="/auth/login">
          Войти
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
                  data-nimg="1"
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
                  data-nimg="1"
                  className="login_socialIcon w-[15px]"
                  src="/assets/images/auth/ok.svg"
                />
              </div>
            </button>
            <button className="login_socialButton">
              <div className="login_socialBg__6Tp8v">
                <Image
                  alt="PUIG Yandex"
                  loading="lazy"
                  width="11"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  className="login_socialIcon w-[15px]"
                  src="/assets/images/auth/yandex.svg"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

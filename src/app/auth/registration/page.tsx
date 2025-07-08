import { AutFormLayout } from "../components/auth-form";

export default function RegisterPage() {
  return (
    <AutFormLayout submitText="Зарегистрироваться" linkText="Войти">
      <div className="auth__select-wrapper">
        <div className="auth__select-value">Золотое яблоко</div>
        <div className="auth__arrow"></div>
      </div>
      <label className="auth__label">
        <input
          required
          className="auth__input"
          placeholder="Полное имя"
          type="text"
          value=""
          name="name"
        />
      </label>
      <label className="auth__label">
        <input
          required
          className="auth__input"
          placeholder="Ваш E-mail"
          type="email"
          value=""
          name="email"
        />
      </label>
      <label className="auth__label">
        <input
          required
          className="auth__input"
          placeholder="Пароль"
          type="password"
          value=""
          name="password"
        />
      </label>
      <label className="auth__label">
        <input
          required
          className="auth__input"
          placeholder="Повторите пароль"
          type="password"
          value=""
          name="confirmPassword"
        />
      </label>
    </AutFormLayout>
  );
}

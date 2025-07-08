import { AutFormLayout } from "../components/auth-form";

export default function LoginPage() {
  return (
    <AutFormLayout submitText="Войти" linkText="Зарегистрироваться">
      <label className="auth__label">
        <input
          type="email"
          className="auth__input"
          required
          placeholder="Ваш E-mail"
          name="email"
          value=""
        />
      </label>
      <label className="auth__label">
        <input
          type="password"
          className="auth__input"
          required
          placeholder="Пароль"
          name="password"
          value=""
        />
      </label>
    </AutFormLayout>
  );
}

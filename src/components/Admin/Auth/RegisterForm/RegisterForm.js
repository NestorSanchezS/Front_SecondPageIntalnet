import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import "./RegisterForm.scss";

export const RegisterForm = () => {
  const [error, setError] = useState("Error");
  return (
    <Form className="register-form">
      <Form.Input name="email" placeholder="Correo electronico" />
      <Form.Input name="password" type="password" placeholder="Contraseña" />
      <Form.Input
        name="repeatPassword"
        type="password"
        placeholder="Repetir contraseña"
      />
      <Form.Checkbox
        name="conditionsAccepted"
        label="He leído y acepto las politicas de privacidad"
      />
      <Form.Button type="submit" primary fluid>
        Crear cuenta
      </Form.Button>
      <p className="register-form__error">{error}</p>
    </Form>
  );
};
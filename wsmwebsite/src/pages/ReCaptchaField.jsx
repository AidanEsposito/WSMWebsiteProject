import { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptchaField = forwardRef((props, ref) => (
  <ReCAPTCHA
    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
    ref={ref}
  />
));

export default ReCaptchaField;

import ru from "./langs/ru.json";
import en from "./langs/en.json";
import uz from "./langs/uz.json";
import { createI18n } from "vue-i18n";

export const messages = {
  en,
  ru,
  uz,
};

export const i18n = createI18n({
  legacy: false,
  debug: true,
  locale: "ru",
  fallbackLocale: "en",
  messages,
});

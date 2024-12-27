import { ref, onMounted } from "vue";

export function useTheme() {
  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  };

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      isDark.value = true;
      document.documentElement.classList.add("dark");
    }
  };

  onMounted(initializeTheme);

  return { isDark, toggleTheme };
}

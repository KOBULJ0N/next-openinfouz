export const themeConfig = {
  dark: {
    // Common tokens
    primary: "#0EA5E9",
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#0EA5E9",

    // Background colors
    bgColor: "#0F172A",
    bgColorLight: "#1E293B",
    bgColorLighter: "#334155",

    // Text colors
    textColor: "#E2E8F0",
    textColorLight: "#94A3B8",

    // Border colors
    borderColor: "#334155",

    // Component specific overrides
    components: {
      // Button
      "el-button": {
        "bg-color": "#0EA5E9",
        "hover-bg-color": "#38BDF8",
        "active-bg-color": "#0284C7",
      },
      // Input
      "el-input": {
        "bg-color": "#1E293B",
        "border-color": "#334155",
        "text-color": "#E2E8F0",
      },
      // Select
      "el-select": {
        "bg-color": "#1E293B",
        "border-color": "#334155",
      },
      // Menu
      "el-menu": {
        "bg-color": "#0F172A",
        "hover-bg-color": "#334155",
        "text-color": "#E2E8F0",
      },
      // Card
      "el-card": {
        "bg-color": "#1E293B",
        "border-color": "#334155",
      },
    },
  },
  light: {
    // Common tokens
    primary: "#0EA5E9",
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#0EA5E9",

    // Use Element Plus default light theme values
    bgColor: "#ffffff",
    bgColorLight: "#f5f7fa",
    bgColorLighter: "#ecf5ff",

    textColor: "#303133",
    textColorLight: "#606266",

    borderColor: "#dcdfe6",
  },
};

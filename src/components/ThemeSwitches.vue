<!-- <template>
  <el-switch
    v-model="darkMode"
    inline-prompt
    :active-icon="Moon"
    :inactive-icon="Sunny"
    class="theme-switch"
    @change="toggleTheme"
  />
</template>

<script setup>
import { ref, watch } from "vue";
import { Moon, Sunny } from "@element-plus/icons-vue";

const props = defineProps({
  isDark: {
    type: Boolean,
    required: true,
  },
});

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark", isDark.value);
};

const emit = defineEmits(["update:isDark"]);
const value1 = ref(true);
const darkMode = ref(props.isDark);

watch(
  () => props.isDark,
  newValue => {
    darkMode.value = newValue;
  }
);

const toggleTheme = value => {
  emit("update:isDark", value);
};
</script>

<style scoped>
.theme-switch {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 2001;
}
</style> -->

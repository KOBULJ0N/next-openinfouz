<template>
  <div :style="defaultStyles">
    <div :style="innerStyles">
      <table :style="tableStyles">
        <tbody>
          <tr>
            <td :style="tdLabelStyles">Selected Region:</td>
            <td :style="tdValueStyles">
              {{ selectedRegion }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "UzbekistanMapTitle",
  props: {
    selectedRegion: {
      type: String,
      required: true,
    },
    style: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    defaultStyles() {
      return {
        alignItems: "center",
        justifySelf: "center",
        ...this.style,
      };
    },
    innerStyles() {
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
    },
    tableStyles() {
      return {
        borderCollapse: "collapse",
        fontSize: "14px",
        color: "#1256a0",
      };
    },
    tdLabelStyles() {
      return {
        fontWeight: 400,
        paddingRight: "5px",
      };
    },
    tdValueStyles() {
      return {
        fontWeight: 600,
        width: "200px",
        textAlign: "left",
        whiteSpace: "nowrap",
      };
    },
  },
};
</script>

<style></style>

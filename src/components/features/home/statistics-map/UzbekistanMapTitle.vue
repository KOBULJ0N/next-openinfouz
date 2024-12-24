<template>
  <div style="align-items: center; justify-self: center">
    <div style="display: flex; align-items: center; justify-content: center">
      <table
        table
        style="border-collapse: collapse; font-size: 14px; color: #1256a0"
      >
        <tbody>
          <tr>
            <td style="font-weight: 400; padding-right: 5px">
              Selected Region:
            </td>
            <td
              style="
                font-weight: 600;
                width: 200px;
                text-align: left;
                white-space: nowrap;
              "
            >
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
  name: "RegionTitleComponent",
  props: {
    selectedRegion: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>

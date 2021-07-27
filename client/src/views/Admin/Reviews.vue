<template>
  <div class="reviews">
    <div class="md-layout">
      <!-- This div shows the number of the of the Employees -->
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <h2>This Page will show the reviews made by the customers</h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "Reviews",
  data() {
    return {
      Employees: [
        { Name: "Adil", Address: "Township", City: "Lahore" },
        { Name: "Ahmed", Address: "Township", City: "Lahore" },
        { Name: "Maimon", Address: "Bahira", City: "India" },
        { Name: "Hamza", Address: "Township", City: "Peshawar" },
      ],
    };
  },
};
</script>

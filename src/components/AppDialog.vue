<template>
  <div class="dialog">
    <div class="dialog-content">
      
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  name: "app-dialog",
  setup() {
    const marker = ref([false, false]);
    const isChecked = ref(true);
    const isCheckedPolicy = ref(true);
    const toggleType = (index) => {
      marker.value[index] = !marker.value[index];
    };
    const getInputType = computed(() => {
      return function (index) {
        return marker.value[index] ? "text" : "password";
      };
    });
    return {
      marker,
      isChecked,
      isCheckedPolicy,
      toggleType,
      getInputType,
    };
  },
};
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* width: 100%;
  height: 100%; */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.dialog-content {
  padding: 100px 0;
}
.form {
  width: 509px;
  background-color: #fff;
  border-radius: 16px;
}
.form-content {
  width: 100%;
  padding: 100px 50px;
  min-height: 100px;
  overflow-y: scroll;
}
.form-header {
  font-size: 29px;
  font-weight: bold;
  margin-bottom: 9px;
}
.form-row {
  display: flex;
  justify-content: space-around;
  position: relative;
}
.form-body .form-row {
  width: 409px;
  height: 63px;
  background-color: #f7f0d4;
  border-radius: 10px;
  padding: 0 16px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.form-label {
  position: absolute;
  top: 17px;
  left: 16px;
  color: #403a4b;
  transition: top 0.3s linear;
}
input {
  font-size: 18px;
  font-weight: bold;
  outline: none;
  border: 0;
  background-color: transparent;
  padding-bottom: 8px;
}
input:focus ~ .form-label {
  top: 0;
}
.form-icon {
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translateY(-50%);
  cursor: pointer;
}
.form-row-check {
  margin-top: 12px;
  margin-bottom: 14.5px;
  display: flex;
  align-items: center;
}
.form-label-check {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.form-input-check-fake {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.icon-checked {
  width: 28.5px;
  height: 28.5px;
  margin-right: 16px;
}
.icon-unchecked {
  width: 28.5px;
  height: 28.5px;
  border-radius: 4px;
  border: 2px solid #64520a;
  margin-right: 16px;
}
.icon-checked img {
  width: 100%;
  object-fit: cover;
}
.form-footer-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.line {
  width: 60px;
  height: 1px;
  background-color: #969698;
}
.text {
  color: #969698;
  font-size: 11px;
}
.form-footer-social {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
}
.form-footer-policy {
  font-size: 12px;
  color: #969698;
  margin-left: 40px;
}
</style>

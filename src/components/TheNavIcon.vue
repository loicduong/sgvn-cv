<template>
  <div
    style="width: 21px; height: 24px; padding-top: 3px; padding-bottom: 3px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 4.50px; display: inline-flex">
    <div style="width: 21px; height: 3px; background: white; border-radius: 50px"></div>
    <div style="width: 21px; height: 3px; background: white; border-radius: 50px"></div>
    <div style="width: 21px; height: 3px; background: white; border-radius: 50px"></div>
  </div>
</template>

<style scoped>
#nav-icon4 {
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-icon4 div {
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

#nav-icon4.open div:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

#nav-icon4.open div:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon4.open div:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}
</style>

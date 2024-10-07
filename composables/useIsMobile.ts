export function useIsMobile() {
  const value = ref(false);

  function onResize() {
    value.value = window.innerWidth <= 768;
  }

  onMounted(() => {
    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return value;
}

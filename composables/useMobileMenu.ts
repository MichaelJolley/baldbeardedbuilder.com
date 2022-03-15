import { readonly, ref } from 'vue'

const mobileMenuExpanded = ref(false)

const toggleMobileMenu = () => {
  mobileMenuExpanded.value = !mobileMenuExpanded.value
}

export function useMobileMenu() {
  return { 
    mobileMenuExpanded: readonly(mobileMenuExpanded), 
    toggleMobileMenu 
  }
}
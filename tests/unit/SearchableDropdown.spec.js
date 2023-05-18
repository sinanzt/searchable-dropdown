import { shallowMount } from '@vue/test-utils'
import SearchableDropdown from '@/components/SearchableDropdown.vue'

describe('SearchableDropdown.vue', () => {

  it('opens on container click as expected', () => {
    const items = []
    const wrapper = shallowMount(SearchableDropdown, {
      propsData: { items }
    })
    const dropdownContainer = wrapper.find({ ref: 'dropdown-container' })
    expect(wrapper.vm.isOpen).toBe(false)
    dropdownContainer.trigger('click')
    expect(wrapper.vm.isOpen).toBe(true)
    dropdownContainer.trigger('click')
    expect(wrapper.vm.isOpen).toBe(true) // should stay open
  })

  it('opens and closes on chevron icon click', () => {
    const items = []
    const wrapper = shallowMount(SearchableDropdown, {
      propsData: { items }
    })
    const dropdownContainer = wrapper.find({ ref: 'icon-btn' })
    expect(wrapper.vm.isOpen).toBe(false)
    dropdownContainer.trigger('click')
    expect(wrapper.vm.isOpen).toBe(true)
    dropdownContainer.trigger('click')
    expect(wrapper.vm.isOpen).toBe(false)
  })
})

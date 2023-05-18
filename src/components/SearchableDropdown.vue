<template>
  <div
    class="dropdown-container"
    :class="{ opened: isOpen }"
    @click="openDropdown"
    ref="dropdown-container"
    v-clickoutside="closeDropdown"
  >
    <span v-show="!isOpen">
      <span v-if="!value" class="closed-dropdown-text"> Choose a Fruit </span>
      <span v-else class="closed-dropdown-text selected-value-text">
        {{ value.name }}
      </span>
    </span>
    <span v-show="isOpen">
      <input
        v-model="searchText"
        ref="search"
        type="text"
        :placeholder="'Choose a Fruit'"
        class="search-dropdown-input"
      />
    </span>

    <span
      class="cursor-pointer z-1"
      ref="icon-btn"
      @click.stop="isOpen ? closeDropdown() : openDropdown()"
    >
      <img
        class="float-right chevron-icon"
        src="/icons/chevron-down.svg"
      />
    </span>

    <transition name="height-slide">
      <div v-if="isOpen" class="dropdown-items-container overflow-auto">
        <div v-if="filteredItems.length > 0">
          <div
            v-for="(item, index) in filteredItems"
            :key="index"
            class="dropdown-item clickable"
            @click.stop="handleItemSelect(item)"
          >
          <div class="dropdown-item-wrapper">
            <img
            class="dropdown-item-icon"
            :src="item.icon"
          />
            <span>{{ item.name }}</span>
          </div>
          </div>
        </div>
        <div v-else class="dropdown-item empty-list-msg">
          No items were found.
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'SearchableDropdown',
  props: {
    value: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      searchText: "",
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((itemValue) =>
        itemValue.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(this.searchText.toLowerCase().replace(/\s+/g, ""))
      );
    },
  },
  methods: {
    openDropdown() {
      this.isOpen = true;

      this.$nextTick(() => {
        this.$refs.search.focus();
      });
    },
    closeDropdown() {
      this.isOpen = false;
      this.searchText = "";
    },
    handleItemSelect(itemValue) {
      this.$emit("input", itemValue);
      this.closeDropdown();
    },
  },
  directives: {
    clickoutside: {
      bind: function (el, binding, vnode) {
        el.eventOnClick = function (event) {
          if (!el.contains(event.target)) {
            vnode.context[binding.expression](event);
          }
        };

        document.addEventListener("click", el.eventOnClick);
        document.addEventListener("touchend", el.eventOnClick);
      },
      unbind: function (el) {
        document.removeEventListener("click", el.eventOnClick);
        document.removeEventListener("touchend", el.eventOnClick);
      },
    },
  },
};
</script>
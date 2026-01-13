<template>
  <div class="editable-field">
    <div class="field-wrapper">
      <label class="field-label">{{ label }}</label>
      <div v-if="!editing" class="field-display">
        <slot name="display" :value="modelValue">
          <span v-if="type === 'color'" class="color-display">
            <span class="color-sample" :style="{ backgroundColor: String(modelValue) }"></span>
            {{ modelValue }}
          </span>
          <span v-else>{{ modelValue || '-' }}</span>
        </slot>
      </div>
      <component
        v-else
        :is="componentMap[type]"
        :model-value="modelValue"
        :label="label"
        :outlined="false"
        dense
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import InputComponent from '../inputs-component/padrao/input-component.vue';
import InputColorComponent from '../inputs-component/color/input-color-component.vue';

interface Props {
  modelValue: string | number;
  label: string;
  editing: boolean;
  type?: 'text' | 'number' | 'color';
}

withDefaults(defineProps<Props>(), {
  type: 'text',
});

defineEmits<{
  'update:modelValue': [value: string | number];
}>();

const componentMap = computed(() => ({
  text: InputComponent,
  number: InputComponent,
  color: InputColorComponent,
}));
</script>

<style lang="scss" scoped>
.editable-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .field-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .field-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #666;
  }

  .field-display {
    padding: 0.75rem;
    background-color: #f5f5f5;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    min-height: 2.5rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #333;

    .color-display {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .color-sample {
        width: 24px;
        height: 24px;
        border-radius: 4px;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>

<template>
  <RadioGroup :class="[!field.stacked ? 'flex flex-col md:flex-row' : 'tw-p-8 tw-pt-2']" v-model="this.value">
    <RadioGroupLabel :class="[!field.stacked ? 'px-6 md:px-8 mt-2 md:mt-0 w-full md:w-1/5 md:py-5' : 'inline-block tw-pb-4 pt-2 leading-tight']">{{ field.name }}</RadioGroupLabel>
    <div :class="[!field.stacked ?  'mt-1 md:mt-0 pb-5 px-6 md:px-8 md:w-3/5 w-full md:py-5' : '' ]">
      <div class="-space-y-px tw-rounded-md tw-bg-white dark:bg-gray-700 dark:border-gray-700 divide-y dark:divide-gray-800 border">
      <RadioGroupOption as="template" v-for="(options, settingIdx) in field.options" :key="options.name" :value="options.value" v-slot="{ checked, active }">
        <div :class="[checked ? 'tw-bg-sky-50 dark:bg-gray-900 z-10 tw-rounded-md' : '', 'relative p-4 flex tw-cursor-pointer tw-focus:outline-none']">
          <span :class="[checked ? 'tw-bg-sky-400 tw-border-transparent' : 'tw-bg-white tw-border-gray-300 tw-border', active ? 'tw-ring-sky-400' : '', 'tw-mt-0.5 tw-h-4 tw-w-4 tw-shrink-0 tw-cursor-pointer tw-rounded-full tw-flex tw-items-center tw-justify-center']" aria-hidden="true">
            <span class="tw-rounded-full tw-bg-white tw-w-1.5 tw-h-1.5" />
          </span>
          <span class="tw-ml-3 tw-flex tw-flex-col">
            <RadioGroupLabel as="span" :class="[checked ? 'tw-text-sky-900 dark:text-white' : 'tw-text-gray-900 dark:text-gray-400', 'tw-block tw-text-sm tw-font-medium']">{{ options.name }}</RadioGroupLabel>
            <RadioGroupDescription as="span" :class="[checked ? 'tw-text-sky-700 dark:text-gray-400' : 'tw-text-gray-500  dark:text-gray-100', 'tw-block tw-text-sm']">{{ options.description }}</RadioGroupDescription>
          </span>
        </div>
      </RadioGroupOption>
      </div>
    </div>
  </RadioGroup>
</template>

<script setup>
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
</script>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
  mixins: [FormField, HandlesValidationErrors],

  props: ['resourceName', 'resourceId', 'field'],

  methods: {
    /*
     * Set the initial, internal value for the field.
     */
    setInitialValue() {
      this.value = this.field.value || ''
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      formData.append(this.field.attribute, this.value || '')
    },
  },
}
</script>

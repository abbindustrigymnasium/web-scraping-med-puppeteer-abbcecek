<template>
  <div
    class="flex justify-start flex-row flex-wrap text-lg grid grid-cols-3 gap-x-4 px-8"
  >
    <!-- Creates a div for every date key in object -->
    <div
      v-for="(dateData, date) in jsonData"
      :key="date"
      class="flex flex-col justify-start mt-4"
    >
      <div class="">
        <h2 class="text-2xl font-bold my-2">{{ date }}</h2>
        <ul
          class="flex flex-col divide-y-2 divide-rose-100 align-items-center rounded-xl overflow-hidden"
        >
          <!-- Creates a div with a list containing the hour, temperature and weather of every key inside the previous key -->
          <li
            v-for="(hourData, hour) in dateData"
            :key="hour"
            class="flex flex-row py-6 px-10 grid grid-cols-4 justify-items-start align-items-center even:bg-rose-200 bg-rose-100"
          >
            <p class="justify-self-start col-span-1">{{ hour }}:00</p>
            <p class="col-span-1">{{ hourData.temperature }}</p>
            <p class="col-span-2">{{ hourData.weather }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jsonData: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        const response = await import('../../../data.json')
        this.jsonData = response.default
      } catch (error) {
        console.error('Error fetching JSON data:', error)
      }
    }
  }
}
</script>
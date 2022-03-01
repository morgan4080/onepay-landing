<template>
  <div>
    <div class="space-y-2 pt-10 pb-20 bg-gray-50">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-white shadow">
        <h1 class="uppercase text-lg font-medium text-black">
          Loan Calculator
        </h1>
      </div>
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-white shadow">
        <div class="grid grid-cols-8 gap-6">
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Customer Name
            </label>
            <input type="text" class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
          </div>
          <div class="py-2 col-span-2" />
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Calculation ID
            </label>
            <input type="text" class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-white shadow">
        <div class="grid grid-cols-8 gap-6">
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Loan Type
            </label>
            <input type="text" class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
          </div>
          <div class="py-2 col-span-2 flex justify-center">
            <button type="button" class="flex items-center uppercase justify-center w-32 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-500  hover:bg-opacity-70 sm:px-8">
              Compute
            </button>
          </div>
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Principal Amt:
            </label>
            <input type="text" class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs" readonly>
          </div>
        </div>
        <div class="grid grid-cols-8 gap-6">
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Princiapl Amt:
            </label>
            <input type="text" class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
          </div>
          <div class="py-2 col-span-2 flex justify-center">
            <button type="button" class="flex items-center uppercase justify-center w-32 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-gray-200 hover:bg-opacity-70 sm:px-8">
              Confirm
            </button>
          </div>
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Repay Amt:
            </label>
            <input type="text" class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs" readonly>
          </div>
        </div>
        <div class="grid grid-cols-8 gap-6">
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Annual Rate:
            </label>
            <input type="text" class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
          </div>
          <div class="py-2 col-span-2 flex justify-center">
            <button type="button" class="flex items-center uppercase justify-center w-32 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-gray-200 hover:bg-opacity-70 sm:px-8">
              Print
            </button>
          </div>
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Total Interest:
            </label>
            <input type="text" class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs" readonly>
          </div>
        </div>
        <div class="grid grid-cols-8 gap-6">
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Loan Length:
            </label>
            <div class="mt-1 col-span-2 flex space-x-2 rounded-md">
              <div class="relative w-1/2 focus-within:z-10">
                <input class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
              </div>
              <select class="border w-1/2 border-gray-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                <option>Months</option>
                <option>Years</option>
              </select>
            </div>
          </div>
          <div class="py-2 col-span-2 flex justify-center"></div>
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Total Repayable:
            </label>
            <input type="text" class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs" readonly>
          </div>
        </div>
        <div class="grid grid-cols-8 gap-6">
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Pay Periodicity:
            </label>
             <select class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>
          <div class="py-2 col-span-2 flex justify-center"></div>
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Total Periods:
            </label>
            <div class="mt-1 col-span-2 flex space-x-2 rounded-md">
              <div class="relative w-1/2 focus-within:z-10">
                <input class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs" readonly>
              </div>
              <select class="border w-1/2 border-gray-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md" disabled>
                <option>Months</option>
                <option>Years</option>
              </select>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-8 gap-6">
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Interest Type:
            </label>
            <input type="text" class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
          </div>
          <div class="py-2 col-span-2 flex justify-center"></div>
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Other Charges:
            </label>
            <div class="mt-1 col-span-2 flex space-x-2 rounded-md shadow-sm">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <input class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
              </div>
              <button @click="mountModal" type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-500 text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-8 gap-6">
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2"></div>
          <div class="py-2 col-span-2 flex justify-center"></div>
          <div class="py-2 col-span-3 grid grid-cols-3 gap-2">
            <label class="block text-sm font-light text-black sm:mt-px sm:pt-2">
              Monthly Charges:
            </label>
            <div class="mt-1 col-span-2 flex space-x-2 rounded-md shadow-sm">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <input class="appearance-none col-span-2 border-2 border-gray-500 min-w-0 w-full bg-white border border-transparent rounded-md py-1.5 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
              </div>
              <button class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-500 text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" type="button" @click="mountModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl max-h-96 mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-white shadow overflow-y-scroll">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-sm font-bold text-gray-900 bg-blue-100 uppercase tracking-wider">
                Period
              </th>
              <th scope="col" class="px-6 py-3 text-left text-sm font-bold text-gray-900 bg-blue-100 uppercase tracking-wider">
                Interest (KSH)
              </th>
              <th scope="col" class="px-6 py-3 text-left text-sm font-bold text-gray-900 bg-blue-100 uppercase tracking-wider">
                Principal paid (KSH)
              </th>
              <th scope="col" class="px-6 py-3 text-left text-sm font-bold text-gray-900 bg-blue-100 uppercase tracking-wider">
                Installment (KSH)
              </th>
              <th scope="col" class="px-6 py-3 text-left text-sm font-bold text-gray-900 bg-blue-100 uppercase tracking-wider">
                Balance (KSH)
              </th>
              <th scope="col" class="px-6 py-3 text-left text-sm font-bold text-gray-900 bg-blue-100 uppercase tracking-wider">
                Total Interest (KSH)
              </th>
            </tr>
          </thead>
          <tbody class="overflow-x-scroll">
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">49,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,127,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">49,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,127,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">49,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,127,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">49,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,127,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">49,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,127,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">49,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,127,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">49,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,127,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">49,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,127,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">49,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78,400.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,127,000.00</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29,400.00</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <modal v-if="modalActive" @closeModal="modalActive = !modalActive" />
  </div>
</template>
<script>
import modal from '@/components/modal.vue'
export default {
  components: {
    modal
  },
  transition: 'slide-bottom',
  data () {
    return {
      modalActive: false
    }
  },
  methods: {
    mountModal () {
      this.modalActive = !this.modalActive
    }
  }
}
</script>

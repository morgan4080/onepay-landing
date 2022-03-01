<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="$emit('closeModal')" />
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
        <button class="absolute top-0 right-0" @click="$emit('closeModal')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="px-4 py-5 sm:px-6 bg-gray-100">
          <h3 class="text-lg leading-6 font-medium text-gray-900 uppercase">
            Other Fees
          </h3>
        </div>
        <div class="pb-2">
          <div class="bg-white px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 relative">
            <dt class="text-sm font-medium text-black">
              RTGS Fees
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-end space-x-4">
              <span>
                KSH 5,000
              </span>
              <button @click="showOverlayInput(1)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <div v-if="overlayInput === 1" class="absolute top-5 p-3 bg-gray-200 w-1/3">
                <label class="block text-xs pb-1 px-1 font-normal text-black">
                  Customer Name
                </label>
                <div class="flex space-x-2">
                  <input type="text" class="appearance-none col-span-2 min-w-0 w-full bg-white rounded-md py-0.5 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
                  <div class="flex space-x-1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="showOverlayInput(1)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bg-white px-4 py-10 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 relative">
            <dt class="text-sm font-medium text-black">
              Valuation Fees:
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-end space-x-4">
              <span>
                KSH 5,000
              </span>
              <button @click="showOverlayInput(2)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <div v-if="overlayInput === 2" class="absolute top-5 p-3 bg-gray-200 w-1/3">
                <label class="block text-xs pb-1 px-1 font-normal text-black">
                  Customer Name
                </label>
                <div class="flex space-x-2">
                  <input type="text" class="appearance-none col-span-2 min-w-0 w-full bg-white rounded-md py-0.5 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
                  <div class="flex space-x-1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="showOverlayInput(2)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bg-white px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 relative">
            <dt class="text-sm font-medium text-black">
              CRB
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-end space-x-4">
              <span>
                KSH 5,000
              </span>
              <button @click="showOverlayInput(3)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <div v-if="overlayInput === 3" class="absolute top-5 p-3 bg-gray-200 w-1/3">
                <label class="block text-xs pb-1 px-1 font-normal text-black">
                  Customer Name
                </label>
                <div class="flex space-x-2">
                  <input type="text" class="appearance-none col-span-2 min-w-0 w-full bg-white rounded-md py-0.5 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
                  <div class="flex space-x-1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="showOverlayInput(3)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bg-white px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 relative">
            <dt class="text-sm font-medium text-black">
              Tracking Installation & Maintenance
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-end space-x-4">
              <span>
                KSH 5,000
              </span>
              <button @click="showOverlayInput(4)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <div v-if="overlayInput === 4" class="absolute top-5 p-3 bg-gray-200 w-1/3">
                <label class="block text-xs pb-1 px-1 font-normal text-black">
                  Customer Name
                </label>
                <div class="flex space-x-2">
                  <input type="text" class="appearance-none col-span-2 min-w-0 w-full bg-white rounded-md py-0.5 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
                  <div class="flex space-x-1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="showOverlayInput(4)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bg-white px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 relative">
            <dt class="text-sm font-medium text-black">
              Tracking Fees Monthly
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-end space-x-4">
              <span>
                KSH 5,000
              </span>
              <button @click="showOverlayInput(5)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <div v-if="overlayInput === 5" class="absolute top-5 p-3 bg-gray-200 w-1/3">
                <label class="block text-xs pb-1 px-1 font-normal text-black">
                  Customer Name
                </label>
                <div class="flex space-x-2">
                  <input type="text" class="appearance-none col-span-2 min-w-0 w-full bg-white rounded-md py-0.5 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
                  <div class="flex space-x-1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="showOverlayInput(5)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bg-white px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 relative">
            <dt class="text-sm font-medium text-black">
              Insurance Fees
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-end space-x-4">
              <span>
                KSH 5,000
              </span>
              <button @click="showOverlayInput(6)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <div v-if="overlayInput === 6" class="absolute top-5 p-3 bg-gray-200 w-1/3">
                <label class="block text-xs pb-1 px-1 font-normal text-black">
                  Customer Name
                </label>
                <div class="flex space-x-2">
                  <input type="text" class="appearance-none col-span-2 min-w-0 w-full bg-white rounded-md py-0.5 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
                  <div class="flex space-x-1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="showOverlayInput(6)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bg-white px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 relative">
            <dt class="text-sm font-medium text-black">
              Insurance Deductions
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-end space-x-4">
              <span>
                KSH 5,000
              </span>
              <button @click="showOverlayInput(7)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <div v-if="overlayInput === 7" class="absolute top-5 p-3 bg-gray-200 w-1/3">
                <label class="block text-xs pb-1 px-1 font-thin text-gray-700">
                  Customer Name
                </label>
                <div class="flex space-x-2">
                  <input type="text" class="appearance-none col-span-2 min-w-0 w-full bg-white rounded-md py-0.5 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
                  <div class="flex space-x-1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="showOverlayInput(7)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bg-white px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 relative">
            <dt class="text-sm font-medium text-black">
              Insurance Fees
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-end space-x-4">
              <span>
                KSH 5,000
              </span>
              <button @click="showOverlayInput(8)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <div v-if="overlayInput === 8" class="absolute top-5 p-3 bg-gray-200 w-1/3">
                <label class="block text-xs pb-1 px-1 font-thin text-gray-700">
                  Customer Name
                </label>
                <div class="flex space-x-2">
                  <input type="text" class="appearance-none col-span-2 min-w-0 w-full bg-white rounded-md py-0.5 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
                  <div class="flex space-x-1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="showOverlayInput(8)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bg-white px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 relative">
            <dt class="text-sm font-medium text-black">
              Lawyers Fees
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-end space-x-4">
              <span>
                KSH 5,000
              </span>
              <button @click="showOverlayInput(9)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <div v-if="overlayInput === 9" class="absolute top-5 p-3 bg-gray-200 w-1/3">
                <label class="block text-xs pb-1 px-1 font-thin text-gray-700">
                  Customer Name
                </label>
                <div class="flex space-x-2">
                  <input type="text" class="appearance-none col-span-2 min-w-0 w-full bg-white rounded-md py-0.5 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
                  <div class="flex space-x-1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="showOverlayInput(9)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bg-white px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 relative">
            <dt class="text-sm font-medium text-black">
              Processing Fees (%)
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-end space-x-4">
              <span>
                KSH 5,000
              </span>
              <button @click="showOverlayInput(10)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <div v-if="overlayInput === 10" class="absolute top-5 p-3 bg-gray-200 w-1/3">
                <label class="block text-xs pb-1 px-1 font-thin text-gray-700">
                  Customer Name
                </label>
                <div class="flex space-x-2">
                  <input type="text" class="appearance-none col-span-2 min-w-0 w-full bg-white rounded-md py-0.5 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs">
                  <div class="flex space-x-1">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <button @click="showOverlayInput(10)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </dd>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      overlayInput: null
    }
  },
  methods: {
    showOverlayInput (val) {
      if (this.overlayInput === val) {
        this.overlayInput = null
        return
      }
      this.overlayInput = val
    }
  }
}
</script>

<style scoped>

</style>

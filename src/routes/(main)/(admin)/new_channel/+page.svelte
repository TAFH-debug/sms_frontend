<script>
  import axiosInstance from "$lib/axios";
    import { X } from "lucide-svelte";
    
    let channelName = "";
    let description = "";
    let isPrivate = false;
    let isSubmitting = false;
    let errors = { channelName: "", description: "" };
    
    function validateForm() {
      let valid = true;
      errors = { channelName: "", description: "" };
      
      if (!channelName.trim()) {
        errors.channelName = "Channel name is required";
        valid = false;
      } else if (channelName.length < 3) {
        errors.channelName = "Channel name must be at least 3 characters";
        valid = false;
      }
      
      if (description.trim() && description.length > 500) {
        errors.description = "Description must be less than 500 characters";
        valid = false;
      }
      
      return valid;
    }
    
    function handleSubmit(event) {
      if (!validateForm()) {
        event.preventDefault();
      } else {
        isSubmitting = true;
        
        axiosInstance.post("/channels", {
          name: channelName,
          path: channelName.toLowerCase(),
        }).then(() => {
          isSubmitting = false;
          channelName = "";
          description = "";
          isPrivate = false;
        }).catch((error) => {
          console.error(error);
        });
      }
    }
  </script>
  
  <div class="w-full max-w-md mx-auto p-4">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Create a channel</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Channels are where everyone communicates. They're best organized around a topic.</p>
        
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div class="space-y-2">
            <label for="channelName" class="text-sm font-medium text-gray-700 dark:text-gray-300">
              Channel name <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <input
                type="text"
                id="channelName"
                bind:value={channelName}
                class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="e.g. marketing"
              />
            </div>
            {#if errors.channelName}
              <p class="text-sm text-red-500 mt-1 flex items-center">
                <X class="h-4 w-4 mr-1" />
                {errors.channelName}
              </p>
            {/if}
          </div>
          
          <div class="space-y-2">
            <label for="description" class="text-sm font-medium text-gray-700 dark:text-gray-300">
              Description <span class="text-gray-400 dark:text-gray-500 font-normal">(optional)</span>
            </label>
            <textarea
              id="description"
              bind:value={description}
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="What's this channel about?"
            ></textarea>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              {description.length}/500 characters
            </p>
            {#if errors.description}
              <p class="text-sm text-red-500 mt-1 flex items-center">
                <X class="h-4 w-4 mr-1" />
                {errors.description}
              </p>
            {/if}
          </div>
          
          <div class="space-y-2">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Privacy</span>
            <div class="space-y-3">
              <label class="flex items-start">
                <input
                  type="radio"
                  name="privacy"
                  checked={!isPrivate}
                  on:change={() => isPrivate = false}
                  class="mt-1 h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                />
                <div class="ml-3">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                    Public
                    <span class="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                      Recommended
                    </span>
                  </span>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Anyone can view and join this channel.
                  </p>
                </div>
              </label>
              
              <label class="flex items-start">
                <input
                  type="radio"
                  name="privacy"
                  checked={isPrivate}
                  on:change={() => isPrivate = true}
                  class="mt-1 h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                />
                <div class="ml-3">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Private</span>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Only invited people can view and join this channel.
                  </p>
                </div>
              </label>
            </div>
          </div>
          
          <div class="flex justify-end space-x-3">
            <button
              type="button"
              class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {#if isSubmitting}
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              {:else}
                Create Channel
              {/if}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  <style>
    :global(.dark) {
      color-scheme: dark;
    }
    
    /* Primary color variables */
    :root {
      --color-primary: #7c3aed;
      --color-primary-dark: #6d28d9;
    }
    
    .bg-primary {
      background-color: var(--color-primary);
    }
    
    .hover\:bg-primary-dark:hover {
      background-color: var(--color-primary-dark);
    }
    
    .text-primary {
      color: var(--color-primary);
    }
    
    .focus\:ring-primary:focus {
      --tw-ring-color: var(--color-primary);
    }
    
    .focus\:border-primary:focus {
      border-color: var(--color-primary);
    }
  </style>
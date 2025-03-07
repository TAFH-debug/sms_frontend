import { get, writable } from 'svelte/store'

export function storable<T>(data: T) {
   const store = writable(data);
   const { subscribe, set, update } = store;
   const isBrowser = typeof window !== 'undefined';

   isBrowser &&
      localStorage.storable &&
      set(JSON.parse(localStorage.storable));

   return {
      subscribe,
      set: (n: T) => {
         isBrowser && (localStorage.storable = JSON.stringify(n));
         set(n);
      },
      update: (cb: (arg0: T) => T) => {
         const updatedStore = cb(get(store));

         isBrowser && (localStorage.storable = JSON.stringify(updatedStore));
         set(updatedStore);
      }
   };
}
import { writable, type Writable } from 'svelte/store';

export let accessibilityMenuIsOpen: Writable<boolean> = writable(false);

export let ADHDMode: Writable<boolean> = writable(false);

export let cognitiveDissabilityMode: Writable<boolean> = writable(false);

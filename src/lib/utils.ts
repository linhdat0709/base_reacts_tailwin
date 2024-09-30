<<<<<<< HEAD
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
=======
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

>>>>>>> refs/remotes/origin/main
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

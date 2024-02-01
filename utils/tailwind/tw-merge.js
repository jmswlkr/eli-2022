import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

/*
  * TWM (TailwindMerge) Function - Purpose:
  # A helper function to intelligently merge 
  # Tailwind CSS utility classes, interpolated classNames,
  # and object literals into a single, porperly cascaded
  # class string.

  - Accepts arguments of type ClassValue, which can be either a string of classNames, interpolated JS classNames, or an object literal whose keys are classNames and values are booleans that activate or deactivate that className.
  - Pass any of the above types as arguments. Order of arguments determines specificity.
*/

export function twm(...classes) {
  return twMerge(clsx(classes))
}

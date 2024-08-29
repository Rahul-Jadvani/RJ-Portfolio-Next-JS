import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          " flex h-[36px] rounded-md border-2 border-primary focus:border-accent font-light bg-slate-950 px-4 py-5 text-base placeholder:text-accent outline-none focus:bg-white/90 focus:text-primary duration-300 focus:border-2 focus:placeholder:text-primary ",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

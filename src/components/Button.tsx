import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, ...props }: ButtonProps) {
	return (
		<button
			className={`w-full h-12 bg-blue-700 rounded text-neutral-50 font-semibold ${className}`}
			{...props}
		/>
	)
}

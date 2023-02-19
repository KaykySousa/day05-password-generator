import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	onCopyClick?: () => void
	copyButton?: boolean
}

export default function Input({
	type,
	className,
	onCopyClick,
	copyButton = false,
	...props
}: InputProps) {
	return (
		<div className="w-full relative flex items-center">
			<input
				type={type ?? "text"}
				className={`w-full h-12 px-3 bg-zinc-900 text-neutral-50 rounded border-zinc-600 border focus:border-blue-700 focus:ring-blue-700 ${className}`}
				{...props}
			/>
			{copyButton && (
				<button className="absolute p-1 right-2" onClick={onCopyClick}>
					<img src="/copy.svg" alt="" className="h-6 w-6" />
				</button>
			)}
		</div>
	)
}

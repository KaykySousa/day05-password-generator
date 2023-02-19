import { InputHTMLAttributes } from "react"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	labelText: string
}

export default function Checkbox({ labelText, ...props }: CheckboxProps) {
	return (
		<label className="flex items-center text-neutral-50">
			<input
				type="checkbox"
				className="mr-2 text-blue-700 bg-zinc-900"
				{...props}
			/>
			<p>{labelText}</p>
		</label>
	)
}

import { useState } from "react"
import Button from "./components/Button"
import Checkbox from "./components/Checkbox"
import Input from "./components/Input"

type CharTypes = "upper" | "lower" | "numbers" | "symbols"

export default function App() {
	const [uppercase, setUppercase] = useState(false)
	const [lowercase, setLowercase] = useState(true)
	const [numbers, setNumbers] = useState(true)
	const [symbols, setSymbols] = useState(true)
	const [passwordLength, setPasswordLength] = useState(14)

	const [password, setPassword] = useState("")

	function generateChar(type: CharTypes) {
		switch (type) {
			case "upper":
				return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
				break

			case "lower":
				return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
				break

			case "numbers":
				return Math.floor(Math.random() * 10)
				break

			case "symbols":
				const symbols = "!@#$%&*/^"
				return symbols[Math.floor(Math.random() * symbols.length)]
				break

			default:
				break
		}
	}

	function generatePassword() {
		let password = ""

		const allowedChars: CharTypes[] = []
		if (uppercase) allowedChars.push("upper")
		if (lowercase) allowedChars.push("lower")
		if (numbers) allowedChars.push("numbers")
		if (symbols) allowedChars.push("symbols")

		if (!allowedChars.length) return

		for (let i = 0; i < passwordLength; i++) {
			password += generateChar(
				allowedChars[Math.floor(Math.random() * allowedChars.length)]
			)
		}

		setPassword(password)
	}

	return (
		<div className="min-h-screen w-full flex justify-center items-center bg-zinc-900">
			<div className="max-w-sm w-full bg-zinc-800 rounded flex flex-col items-center p-6">
				<p className="text-xl text-neutral-50 mb-6">
					Gerador de senhas
				</p>
				<div className="w-full flex flex-col gap-y-3 items-start">
					<Input
						placeholder="Senha"
						value={password}
						readOnly
						copyButton
						className="!pr-12"
						onClick={(e) => {
							e.currentTarget.select()
							if (password)
								navigator.clipboard.writeText(password)
						}}
						onCopyClick={() => {
							if (password)
								navigator.clipboard
									.writeText(password)
									.then(() => {
										alert("Senha copiada!")
									})
						}}
					/>

					<label className="text-neutral-50 w-full">
						<p>Número de caracteres</p>
						<input
							type="range"
							min={5}
							max={64}
							step={1}
							className="accent-blue-700 mt-1"
							value={passwordLength}
							onChange={(e) => {
								setPasswordLength(parseInt(e.target.value))
							}}
						/>
						<span className="ml-2">{passwordLength}</span>
					</label>

					<Checkbox
						labelText="Letras maiúsculas"
						checked={uppercase}
						onChange={(e) => {
							setUppercase(e.target.checked)
						}}
					/>
					<Checkbox
						labelText="Letras minúsculas"
						checked={lowercase}
						onChange={(e) => {
							setLowercase(e.target.checked)
						}}
					/>
					<Checkbox
						labelText="Números"
						checked={numbers}
						onChange={(e) => {
							setNumbers(e.target.checked)
						}}
					/>
					<Checkbox
						labelText="Símbolos"
						checked={symbols}
						onChange={(e) => {
							setSymbols(e.target.checked)
						}}
					/>

					<Button onClick={generatePassword}>GERAR</Button>
				</div>
			</div>
		</div>
	)
}

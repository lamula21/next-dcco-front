import { cn } from '@/lib/utils'

export function TextAreaJV({
	width,
	placeholder,
	noFocusColor,
	focusColor,
	bgColor,
	inputColor,
	disabled = false,
	textDisabledColor,
	bgDisabledColor,
	inputType,
	inputName,
	inputId,
}) {
	return (
		<div className={width}>
			<div className="relative w-full">
				<textarea
					rows={3}
					disabled={disabled}
					type={inputType}
					name={inputName}
					id={inputId}
					className={cn(
						`peer h-full min-h-[100px] w-full rounded-[7px] border border-t-transparent px-3 py-2.5 text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-t-transparent focus:outline-0 disabled:border-0`,
						`border-${noFocusColor} bg-${bgColor} text-${inputColor} placeholder-shown:border-${noFocusColor} placeholder-shown:border-t-${noFocusColor} focus:border-2 focus:border-${focusColor}  disabled:bg-${bgDisabledColor}`
					)}
					placeholder=" "
				></textarea>

				<label
					htmlFor={inputId}
					className={cn(
						`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent`,
						`text-${noFocusColor} before:border-${noFocusColor} after:border-${noFocusColor} peer-focus:text-${focusColor} peer-placeholder-shown:text-${noFocusColor} peer-focus:before:border-${focusColor} peer-focus:after:border-${focusColor} peer-disabled:peer-placeholder-shown:text-${textDisabledColor}`
					)}
				>
					{placeholder}
				</label>
			</div>
		</div>
	)
}

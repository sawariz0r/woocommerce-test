
type QuantityCounterProps = {
	value: number;
	onIncrement: () => void;
	onDecrement: () => void;
};

export default function QuantityCounter(props: QuantityCounterProps) {
	return (
		<div className="flex w-[127px] gap-x-3 justify-between items-center border border-black">
			<button onClick={props.onDecrement} className="px-4 py-2 group h-full">
				<Minus />
			</button>
			<span>{props.value}</span>
			<button onClick={props.onIncrement} className="px-4 py-2 group h-full">
				<Plus />
			</button>
		</div>
	);
}

// Would probably move these out to their own files, but for the sake of this example, I'll keep them here
const Plus = () => (
	<svg
		className="group-hover:opacity-50 group-active:scale-75 transition-all duration-300 ease-in-out"
		width="12"
		height="12"
		viewBox="0 0 12 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M6 0V12" stroke="black" />
		<path d="M12 6L5.36442e-07 6" stroke="black" />
	</svg>
);

const Minus = () => (
	<svg
		className="group-hover:opacity-50 group-active:scale-75 transition-all duration-300 ease-in-out"
		width="12"
		height="12"
		viewBox="0 0 12 2"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M12 1L5.36442e-07 0.999999" stroke="black" />
	</svg>
);

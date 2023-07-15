import React from "react";

const Checkbox = (props) => {
    const { changed, id, isSelected, label, value } = props;
	return (
		<>
			<div className="Checkbox grid grid-cols-2 gap-36">
				<label className="text-sm" htmlFor={id}>
					{label}
				</label>
				<input
					className="checked:ring-secondaryLight checked:bg-secondaryLight indeterminate:bg-secondaryLight/10"
					id={id}
					onChange={changed}
					value={value}
					type="checkbox"
					checked={isSelected}
				/>
			</div>
		</>
	);
};

export default Checkbox;

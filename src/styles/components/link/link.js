import React from "react";

export const link = ({href, children}) => {
	return (
		<a href={href} target="_blank">{children}</a>
	);
};
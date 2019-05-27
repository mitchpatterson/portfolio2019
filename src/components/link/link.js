import React from "react";

export const Link = ({href, children}) => {
	return (
		<a href={href} target="_blank">{children}</a>
	);
};
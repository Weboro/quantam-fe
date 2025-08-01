import React from 'react';

interface ContentProps {
	content: string;
}

const Content = ({ content }: ContentProps) => {
	return (
		<div className='flex gap-4' dangerouslySetInnerHTML={{ __html: content }} />
	);
};

export default Content;

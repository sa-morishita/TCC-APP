import NextHead from 'next/head';
import { FC } from 'react';

interface Props {
	title: string;
	description: string;
}

const Head: FC<Props> = ({ title, description }) => {
	return (
		<NextHead>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</NextHead>
	);
};

export default Head;

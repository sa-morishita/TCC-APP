import BlogPage from '../components/blog/BlogPage';
import Layout from '../components/layout/Layout';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Head from '../components/shared/Head';

const Blog: NextPageWithLayout = () => {
	return (
		<>
			<Head title="TCC APP" description="TCC勉強会で作成中のWebアプリ" />
			<div className="min-h-screen bg-gray-100 py-6">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
					<h1 className="text-2xl font-semibold text-gray-900">ブログ</h1>
				</div>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
					<div className="py-4">
						<BlogPage />
					</div>
				</div>
			</div>
		</>
	);
};

Blog.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Blog;

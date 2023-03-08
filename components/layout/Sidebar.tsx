import {
	CalendarIcon,
	FolderIcon,
	HomeIcon,
	UsersIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { judgeSelected } from './lib/helper';
import { filterClassNames } from '../../common/lib/helper';

const Sidebar: FC = () => {
	const { route } = useRouter();

	const navigation = [
		{ name: 'ダッシュボード', href: '/', icon: HomeIcon },
		{ name: 'メンバー', href: '/members', icon: UsersIcon },
		{ name: 'タスク', href: '/task', icon: FolderIcon },
		{ name: 'ブログ', href: '/blog', icon: CalendarIcon },
	];

	return (
		<div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
			<div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
				<div className="flex flex-shrink-0 items-center px-4">
					<Image
						src="/images/icon/icon.png"
						alt="TCC"
						width={50}
						height={50}
						className="rounded-full"
						priority
					/>
				</div>
				<nav className="mt-5 flex-1 space-y-1 bg-white px-2">
					{navigation.map((item) => {
						const { name, href } = item;

						return (
							<Link
								key={name}
								href={href}
								className={filterClassNames(
									judgeSelected(route, href)
										? 'bg-gray-100 text-gray-900'
										: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
									'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
								)}
							>
								<item.icon
									className={filterClassNames(
										judgeSelected(route, href)
											? 'text-gray-500'
											: 'text-gray-400 group-hover:text-gray-500',
										'mr-3 h-6 w-6 flex-shrink-0'
									)}
									aria-hidden="true"
								/>
								{name}
							</Link>
						);
					})}
				</nav>
			</div>
			<div className="flex flex-shrink-0 border-t border-gray-200 p-4">
				<a href="#" className="group block w-full flex-shrink-0">
					<div className="flex items-center">
						<div>
							<Image
								src="https://placehold.jp/3d4070/ffffff/150x150.png"
								alt="user"
								width={36}
								height={36}
								className="rounded-full"
							/>
						</div>
						<div className="ml-3">
							<p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
								ユーザー名
							</p>
							<p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
								プロフィールへのリンク
							</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Sidebar;

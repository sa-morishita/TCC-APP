// ダッシュボード（route==="/")の場合はroute === href、それ以外の場合はhrefが"/"でなく、かつrouteにhrefが含まれているかどうかを判定
export const judgeSelected = (route: string, href: string) => {
	return route === '/' ? route === href : route.includes(href) && href !== '/';
};

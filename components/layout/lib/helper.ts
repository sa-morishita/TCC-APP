import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const navigationItem = [
  { name: "ダッシュボード", href: "/", icon: HomeIcon },
  { name: "メンバー", href: "/members", icon: UsersIcon },
  { name: "タスク", href: "/task", icon: FolderIcon },
  { name: "ブログ", href: "/blog", icon: CalendarIcon },
  { name: "なにか1", href: "/", icon: InboxIcon },
  { name: "なにか2", href: "/", icon: ChartBarIcon },
];

export const convertRoute = (route: string): string => {
  const name =
    navigationItem.find((item) => item.href === route)?.name ||
    "ダッシュボード";

  return name;
};

import { FC, memo } from "react";
import { toast } from "react-hot-toast";

interface Props {
  task: any;
  taskArray: any[];
  setTaskArray: any;
}

const Task: FC<Props> = ({ task, taskArray, setTaskArray }) => {
  const { id, title, done } = task;

  // [ ] 完了ボタンについて、doneがfalseの時は表示を「戻す」にする
  // [ ] {title}のpタグのスタイルについて、doneがtrueの時は「text-gray-900」の代わりに「text-green-500 line-through」にする
  // [ ] 完了ボタンをクリックしたらtaskのdoneをtrueにする
  // [ ] 削除ボタンをクリックしたらtaskを削除する

  // タスクを完了にする
  const handleDone = () => {
    const newTaskArray = taskArray.map((task) => {
      if (task.id === id) {
        return task;
      }
      return task;
    });
    setTaskArray(newTaskArray);
  };

  // タスクを削除する
  const handleDelete = () => {
    const newTaskArray = taskArray.filter((task) => {
      return task;
    });
    setTaskArray(newTaskArray);
    toast.success("タスクを削除しました。");
  };

  return (
    <div className="mb-4 flex items-center">
      <p className="w-full text-gray-900">{title}</p>
      <button
        type="button"
        onClick={() => handleDone()}
        className={`ml-4 mr-2 flex-shrink-0 rounded border-2 p-2 ${
          done
            ? "border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white"
            : "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
        }`}
      >
        完了
      </button>
      <button
        type="button"
        onClick={() => handleDelete()}
        className="ml-2 flex-shrink-0 rounded border-2 border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"
      >
        削除
      </button>
    </div>
  );
};

export default memo(Task);

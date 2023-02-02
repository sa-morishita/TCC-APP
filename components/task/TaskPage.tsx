import { FC, useEffect, useState } from "react";
import Task from "./ui/Task";
import { toast } from "react-hot-toast";

const TaskPage: FC = () => {
  const [input, setInput] = useState<any>("");
  const [taskArray, setTaskArray] = useState<any[]>([]);

  // [ ] {input}のテキストカラーを緑にする
  // [ ] 入力内容：（入力した内容）と表示されるようにする
  // [ ] inputの値が空の場合はtoast.errorを使ってエラーを表示し、追加できないようにする
  // [ ] setTaskArrayに追加する項目に{done:false}を追加する
  // [ ] setTaskArrayに追加完了後、inputを空にする
  // [ ] useEffectを使って、taskが4つ以上あるとき、toast.errorを使って「タスクが4つ以上あります。」と表示する
  // [ ] {input}の部分をコメントアウトし、taskArray.mapをアンコメントする

  useEffect(() => {
    console.log("taskArray", taskArray);
  }, [taskArray]);

  // inputの値を取得してsetInputに入れる
  const handleChange = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleClick();
    }
  };

  // inputの値をtaskArrayに入れる
  const handleClick = () => {
    setTaskArray([...taskArray, { id: taskArray.length, title: input }]);
    toast.success("タスクを追加しました。");
  };

  return (
    <div className="mt-4 flex w-full items-center justify-center">
      <div className="w-full rounded bg-white p-6 shadow lg:max-w-3xl">
        <div className="my-8 flex">
          <input
            className="mr-4 w-full appearance-none rounded border py-2 px-3 text-gray-900 shadow"
            placeholder="ここに記入"
            value={input}
            onChange={handleChange}
            onKeyDown={onKeyDown}
          />
          <button
            className="flex-shrink-0 rounded border-2 border-teal-500 p-2 text-teal-500 hover:bg-teal-500 hover:text-white"
            type="button"
            onClick={() => handleClick()}
          >
            タスクを追加
          </button>
        </div>
        <div className="font-bold text-red-500">{input}</div>
        <div>
          {/* {taskArray.map((task, index) => {
            return (
              <Task
                task={task}
                taskArray={taskArray}
                setTaskArray={setTaskArray}
                key={task.title + String(index)}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;

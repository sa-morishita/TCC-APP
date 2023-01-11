import { FC, useEffect, useState } from "react";
import Task from "./ui/Task";
import { toast } from "react-hot-toast";

const TaskPage: FC = () => {
  const [input, setInput] = useState<any>("");
  const [taskArray, setTaskArray] = useState<any[]>([]);

  useEffect(() => {
    // タスクが2つdoneになったらアラートを出す
    const doneTaskArray = taskArray.filter((task) => {
      return task.done;
    });
    if (doneTaskArray.length === 2) {
      toast.success("お疲れ様です。タスクが2つ完了しました。");
    }
  }, [taskArray]);

  // inputの値を取得してsetInputに入れる
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  // inputの値をtaskArrayに入れる
  const handleClick = () => {
    if (input.trim() === "") {
      toast.error("タスクを入力してください");
      return;
    }

    setTaskArray([...taskArray, { title: input, done: false }]);
    toast.success("タスクを追加しました");
    setInput("");
  };

  return (
    <div className="mt-4 flex w-full items-center justify-center">
      <div className="w-full rounded bg-white p-6 shadow lg:max-w-3xl">
        <div className="mt-4 mb-8 flex">
          <input
            className="mr-4 w-full appearance-none rounded border py-2 px-3 text-gray-900 shadow"
            placeholder="ここに記入"
            value={input}
            onChange={handleChange}
          />
          <button
            className="flex-shrink-0 rounded border-2 border-teal-500 p-2 text-teal-500 hover:bg-teal-500 hover:text-white"
            type="button"
            onClick={() => handleClick()}
          >
            タスクを追加
          </button>
        </div>
        <div>
          {taskArray.map((task, index) => {
            return (
              <Task
                task={task}
                taskArray={taskArray}
                setTaskArray={setTaskArray}
                key={task + String(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;

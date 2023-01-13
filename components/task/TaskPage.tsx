import { FC, useEffect, useState } from "react";
import Task from "./ui/Task";
import { toast } from "react-hot-toast";

const TaskPage: FC = () => {
  const [input, setInput] = useState<any>("");
  const [taskArray, setTaskArray] = useState<any[]>([]);

  useEffect(() => {
    if (taskArray.length > 4) {
      toast.error("タスクが5つ以上あります。");
    }
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
    if (input.trim() === "") {
      return toast.error("タスクを入力してください。");
    }

    setTaskArray([
      ...taskArray,
      { id: taskArray.length, title: input, done: false },
    ]);
    toast.success("タスクを追加しました。");
    setInput("");
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
        <div>
          {taskArray.map((task, index) => {
            return (
              <Task
                task={task}
                taskArray={taskArray}
                setTaskArray={setTaskArray}
                key={task.title + String(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;

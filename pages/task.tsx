import TaskPage from "../components/task/TaskPage";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/shared/Header";

const Task: NextPageWithLayout = () => {
  return (
    <>
      <Header title="TCC APP" description="TCC勉強会で作成中のWebアプリ" />
      <div className="min-h-screen bg-gray-200 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">メンバー</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <TaskPage />
          </div>
        </div>
      </div>
    </>
  );
};

Task.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Task;

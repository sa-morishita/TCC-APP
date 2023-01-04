import DashboardPage from "../components/dashboard/DashboardPage";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layout/Layout";
import { ReactElement } from "react";
import Header from "../components/shared/Header";

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Header title="TCC APP" description="TCC勉強会で作成中のWebアプリ" />
      <div className="min-h-screen bg-gray-200 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            ダッシュボード
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <DashboardPage />
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;

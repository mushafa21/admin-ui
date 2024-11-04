import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="mb-4 sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
          <Card title="Title" description="Description"/>
        </div>
        <div className="mb-4 sm:w-1/3">
          <Card title="Title" description="Description"/>
        </div>
        <div className="mb-4 sm:w-1/3">
          <Card title="Title" description="Description"/>
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
          <Card title="Title" description="Description"/>
        </div>
        <div className="sm:w-2/3">
          <div className="mb-8">
            <Card title="Title" description="Description"/>
          </div>
          <div className="">
            <Card title="Title" description="Description"/>
          </div>
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;

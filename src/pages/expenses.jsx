import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const ExpensesPage = () => {
  return (
    <MainLayout type="expenses">
      {/* top content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-6/6">
          <Card
            title="Expenses Comparison"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit odio, fringilla et sagittis euismod, lacinia eget magna. Pellentesque quis odio ac quam eleifend dapibus quis id nunc. Proin ultrices sagittis lobortis. Aenean eu libero augue. Quisque vel mi quam. Duis feugiat neque lectus, sit amet commodo libero finibus non. Vestibulum euismod, mi in fringilla cursus, risus massa mollis orci, vel tincidunt justo lorem et tortor. Fusce pellentesque, lectus non tristique cursus, odio felis sodales diam, sodales consequat lectus leo eu mi. Nam maximus dictum cursus. Vivamus tincidunt ante ac porta feugiat. Aliquam est nisl, varius in consectetur sit amet, rutrum a arcu. Quisque tincidunt viverra odio dictum vulputate."
          />
        </div>
      </div>
      {/* top content end*/}
      {/* middle content start*/}
      <div className="text-lg text-gray-02 mb-2"> Expenses Breakdown</div>
      <div className="mb-8 sm:gap-6 display=flex sm:flex" >
        <div className="sm:w-1/3 flex-grow:1">
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit odio, fringilla et sagittis euismod, lacinia eget magna. Pellentesque quis odio ac quam eleifend dapibus quis id nunc. Proin ultrices sagittis lobortis. Aenean eu libero augue. Quisque vel mi quam. Duis feugiat neque lectus, sit amet commodo libero finibus non" />
        </div>
        <div className="sm:w-1/3 flex-grow:1">
          <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit odio, fringilla et sagittis euismod, lacinia eget magna. Pellentesque quis odio ac quam eleifend dapibus quis id nunc. Proin ultrices sagittis lobortis. Aenean eu libero augue. Quisque vel mi quam. Duis feugiat neque lectus, sit amet commodo libero finibus non" />
        </div>
        <div className="sm:w-1/3 flex-grow:1">
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit odio, fringilla et sagittis euismod, lacinia eget magna. Pellentesque quis odio ac quam eleifend dapibus quis id nunc. Proin ultrices sagittis lobortis. Aenean eu libero augue. Quisque vel mi quam. Duis feugiat neque lectus, sit amet commodo libero finibus non" />
        </div>
      </div>
      {/* middle content end*/}

      {/* bottom content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit odio, fringilla et sagittis euismod, lacinia eget magna. Pellentesque quis odio ac quam eleifend dapibus quis id nunc. Proin ultrices sagittis lobortis. Aenean eu libero augue. Quisque vel mi quam. Duis feugiat neque lectus, sit amet commodo libero finibus non" />
        </div>
        <div className="sm:w-1/3">
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit odio, fringilla et sagittis euismod, lacinia eget magna. Pellentesque quis odio ac quam eleifend dapibus quis id nunc. Proin ultrices sagittis lobortis. Aenean eu libero augue. Quisque vel mi quam. Duis feugiat neque lectus, sit amet commodo libero finibus non" />
        </div>
        <div className="sm:w-1/3">
        <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit odio, fringilla et sagittis euismod, lacinia eget magna. Pellentesque quis odio ac quam eleifend dapibus quis id nunc. Proin ultrices sagittis lobortis. Aenean eu libero augue. Quisque vel mi quam. Duis feugiat neque lectus, sit amet commodo libero finibus non" />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default ExpensesPage;

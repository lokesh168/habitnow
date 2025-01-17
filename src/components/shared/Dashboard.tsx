import CalSelection from './CalSelection';
import SelectDate from './SelectDate';
import SideNavbar from './SideNavbar';

const Dashboard = () => {
	return (
		<div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
			{/* <!-- Navigation --> */}
			<SideNavbar />
			{/* <!-- Content --> */}
			<div className="px-2 mx-20">
				<CalSelection />
			</div>
			{/* Date Picker */}
			<div className="flex-1 px-2">
				<SelectDate />
			</div>
		</div>
	);
};

export default Dashboard;

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

type HabitOptionsData = {
	everyday: string;
};
type HabitOptionsFormProps = HabitOptionsData & {
	updateFields: (fields: Partial<HabitOptionsData>) => void;
};

const HabitOptionsForm = ({
	everyday,
	updateFields,
}: HabitOptionsFormProps) => {
	return (
		<div className="flex justify-center items-center flex-col">
			<h2 className="mb-10">Define your progress</h2>
			<div>
				<Select
					onValueChange={e => {
						updateFields({ everyday: e });
					}}
				>
					<SelectTrigger className="w-[280px]">
						<SelectValue placeholder="Select a prefer" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="default">Default</SelectItem>
							<SelectItem value="Specific days of the week">
								Specific days of the week
							</SelectItem>
							<SelectItem value="Specific days of the month">
								Specific days of the month
							</SelectItem>
							<SelectItem value="Specific days of the year">
								Specific days of the year
							</SelectItem>
							<SelectItem value="Some days per period">
								Some days per period
							</SelectItem>
							<SelectItem value="Repeat">Repeat</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default HabitOptionsForm;

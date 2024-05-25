import { Load } from "../../../components";
import { useWorkingHourGetAll } from "../../../domain";

export function WorkingHourLine({
  selectedWorkingHour,
  onChangeSelectedWorkingHour,
  isDisabled,
}) {
  const { data: workingHours, isLoading, isError } = useWorkingHourGetAll();

  return (
    <th className="text-center">
      {isLoading || isError ? (
        <Load />
      ) : (
        <select
          name="workingHourId"
          className="form-select"
          value={selectedWorkingHour}
          onChange={onChangeSelectedWorkingHour}
          disabled={isDisabled}
        >
          {workingHours?.map((workingHour) => (
            <option key={workingHour.id} value={workingHour.id}>
              {formatWorkingHour(workingHour)}
            </option>
          ))}
        </select>
      )}
    </th>
  );
}

const formatWorkingHour = ({
  startTime,
  startInterval,
  endInterval,
  endTime,
}) => {
  return startTime + " " + startInterval + " " + endInterval + " " + endTime;
};

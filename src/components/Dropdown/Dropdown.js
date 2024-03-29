import React from "react";
import { weekday, weekend } from "../../Constants";
import { Select } from "antd";
import "antd/dist/antd.css";

function Dropdown(props) {
  const { Option } = Select;
  const { listOfDays, handleBookingTimes, province } = props;

  const renderOption = (data) => {
    return (
      <Option key={data.value} value={data.value}>
        {data.text}
      </Option>
    );
  };

  return listOfDays.map((day) => {
    return (
      <div>
        <div className="day-text">{day.day}</div>
        <Select
          key={day.dayIndex}
          style={{ width: 180 }}
          mode="multiple"
          onChange={(value) => {
            handleBookingTimes(value, day.dayIndex);
          }}
        >
          {day.isWeekDay
            ? weekday[province].map((data) => {
                return renderOption(data);
              })
            : weekend[province].map((data) => {
                return renderOption(data);
              })}
        </Select>
      </div>
    );
  });
}

export default Dropdown;

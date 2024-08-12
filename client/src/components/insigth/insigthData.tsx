import React, { useEffect, useState } from "react";
import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import ILogsData from "@shared/interface/logsData.interface";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@lib/utils";
import { Button } from "@components/ui/button";
import { Calendar } from "@components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";

const DatePickerWithRange = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const LOGS = process.env.NEXT_PUBLIC_LOGS as string;

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  });

  const [logsData, setLogsData] = useState<ILogsData | null>(null);

  const fetchLogs = async () => {
    if (!date?.from || !date?.to) {
      alert("Please select a valid date range.");
      return;
    }

    try {
      console.log("데이터읽기");
      const response = await fetcher(serverUrlGenerator(LOGS), "post", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: date.from.toISOString(),
          endDate: date.to.toISOString(),
        }),
        credentials: "include",
      });
      const data = await response.json();
      setLogsData(data);
      console.log("data", data);
      console.log("setLogsData", setLogsData);
      console.log("logsData", logsData);
    } catch (error) {
      console.error("Error fetching logs:", error);
      alert("Failed to fetch logs. Please try again.");
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>

      <Button onClick={fetchLogs} className="mt-4">
        Fetch Logs
      </Button>

      {logsData && (
        <div className="mt-4">
          <h2>기간 내 Insigth Data:</h2>
          <div>
            <h3>최다 방문자 top10</h3>
            <p>{JSON.stringify(logsData.top10Users)}</p>
          </div>
          <div>
            <h3>평균 사용자 체류 시간</h3>
            <p>{JSON.stringify(logsData.averageUserTime)}</p>
          </div>
          <div>
            <h3>카테고리별 최다 주문내역</h3>
            <p>{JSON.stringify(logsData.topSellingProduct)}</p>
          </div>
          <div>
            <h3>카테고리별 최소 주문내역</h3>
            <p>{JSON.stringify(logsData.leastSellingProduct)}</p>
          </div>
          <div>
            <h3>최다 발주</h3>
            <p>{JSON.stringify(logsData.mostOrdered)}</p>
          </div>
          <div>
            <h3>폐기 메뉴</h3>
            <p>{JSON.stringify(logsData.discardedMenu)}</p>
          </div>
          <div>
            <h3>신메뉴</h3>
            <p>{JSON.stringify(logsData.newMenu)}</p>
          </div>
          {/* <pre>{JSON.stringify(logsData, null, 2)}</pre> */}
        </div>
      )}
    </div>
  );
};

export default DatePickerWithRange;

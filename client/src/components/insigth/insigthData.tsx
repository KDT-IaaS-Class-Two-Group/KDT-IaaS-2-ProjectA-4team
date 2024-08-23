import React, { useEffect, useState } from "react";
import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import ILogsData from "@shared/interface/logsData.interface";
import Image from "next/image";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
import TitleComponent from "../title/titleComponent";
import AdminNav from "../nav/admin/adminNav";

const DatePickerWithRange = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const LOGS = process.env.NEXT_PUBLIC_LOGS as string;
  const star = process.env.NEXT_PUBLIC_S3_NEW_URL as string;
  const order = process.env.NEXT_PUBLIC_S3_ORDER_URL as string;
  const time = process.env.NEXT_PUBLIC_S3_TIME_URL as string;
  const trash = process.env.NEXT_PUBLIC_S3_TRASH_URL as string;
  const truck = process.env.NEXT_PUBLIC_S3_TRUCK_URL as string;
  const user = process.env.NEXT_PUBLIC_S3_USER_URL as string;

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), -20),
    to: new Date(),
  });

  const [logsData, setLogsData] = useState<ILogsData | null>(null);

  const fetchLogs = async () => {
    if (!date?.from || !date?.to) {
      alert("Please select a valid date range.");
      return;
    }

    try {
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
    } catch (error) {
      console.error("Error fetching logs:", error);
      alert("Failed to fetch logs. Please try again.");
    }
  };

  return (
    <>
      <div className="grid w-screen gap-2 p-3 overflow-hidden grid-cols-custom-30-70">
        <div>
          <AdminNav />
        </div>
        <div className="flex flex-col gap-4 mr-5">
          <TitleComponent className="font-jamsil" titletext="인사이트" />
          <div className="flex mt-5">
            <div className={cn(className)}>
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
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
          </div>
          {logsData && (
            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <div className="h-32 mx-2 mt-3 border border-transparent rounded-xl bg-stone-100 hover:shadow-lg hover:border hover:border-cyan-300">
                <Image
                  className="w-8 h-8 mx-auto mt-3"
                  width={36}
                  height={36}
                  src={user}
                  alt="mostVisitior"
                />
                <h3 className="mt-2 text-xl font-semibold">최다 방문자 top1</h3>
                <p className="mt-1 text-xl font-thin">
                  {JSON.stringify(logsData.top10Users)}
                </p>
              </div>
              <div className="h-32 mx-2 mt-3 border border-transparent rounded-xl bg-stone-100 hover:shadow-lg hover:border hover:border-cyan-300">
                <Image
                  className="w-8 h-8 mx-auto mt-3"
                  width={36}
                  height={36}
                  src={time}
                  alt="stayTime"
                />
                <h3 className="mt-2 text-xl font-semibold">
                  평균 사용자 체류 시간
                </h3>
                <p className="mt-1 text-xl font-thin">
                  {JSON.stringify(logsData.averageUserTime)}
                </p>
              </div>
              <div className="h-32 mx-2 mt-3 border border-transparent rounded-xl bg-stone-100 hover:shadow-lg hover:border hover:border-cyan-300">
                <Image
                  className="w-8 h-8 mx-auto mt-3"
                  width={36}
                  height={36}
                  src={truck}
                  alt="mostOrder"
                />
                <h3 className="mt-2 text-xl font-semibold">최다 발주</h3>
                <p className="mt-1 text-xl font-thin">
                  {JSON.stringify(logsData.mostOrdered)}
                </p>
              </div>
              <div className="h-32 mx-2 mt-3 border border-transparent rounded-xl bg-stone-100 hover:shadow-lg hover:border hover:border-cyan-300">
                <Image
                  className="w-8 h-8 mx-auto mt-3"
                  width={36}
                  height={36}
                  src={order}
                  alt="mostSeller"
                />
                <h3 className="mt-2 text-xl font-semibold">최다 주문내역</h3>
                <p className="mt-1 text-xl font-thin">
                  {JSON.stringify(logsData.topSellingProduct)}
                </p>
              </div>
              <div className="h-32 mx-2 mt-3 border border-transparent rounded-xl bg-stone-100 hover:shadow-lg hover:border hover:border-cyan-300">
                <Image
                  className="w-8 h-8 mx-auto mt-3"
                  width={36}
                  height={36}
                  src={order}
                  alt="worstSeller"
                />
                <h3 className="mt-2 text-xl font-semibold">최소 주문내역</h3>
                <p className="mt-1 text-xl font-thin">
                  {JSON.stringify(logsData.leastSellingProduct)}
                </p>
              </div>
              <div className="h-32 mx-2 mt-3 border border-transparent rounded-xl bg-stone-100 hover:shadow-lg hover:border hover:border-cyan-300">
                <Image
                  className="w-8 h-8 mx-auto mt-3"
                  width={36}
                  height={36}
                  src={trash}
                  alt="trash"
                />
                <h3 className="mt-2 text-xl font-semibold">폐기 메뉴</h3>
                <p className="mt-1 text-xl font-thin">
                  {JSON.stringify(logsData.discardedMenu)}
                </p>
              </div>
              <div className="h-32 mx-2 mt-3 border border-transparent rounded-xl bg-stone-100 hover:shadow-lg hover:border hover:border-cyan-300">
                <Image
                  className="w-8 h-8 mx-auto mt-3"
                  width={36}
                  height={36}
                  src={star}
                  alt="new"
                />
                <h3 className="mt-2 text-xl font-semibold">신메뉴</h3>
                <p className="mt-1 text-xl font-thin">
                  {JSON.stringify(logsData.newMenu)}
                </p>
              </div>
              {/* <pre>{JSON.stringify(logsData, null, 2)}</pre> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DatePickerWithRange;

"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => {
  return () => {};
};

const getDate = () =>
  new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

const getServerDate = () => "";

const DateLabel = () => {
  const date = useSyncExternalStore(
    subscribe,
    getDate,
    getServerDate
  );

  return <p className="text-xs text-gray-500">{date}</p>;
};

export default DateLabel;
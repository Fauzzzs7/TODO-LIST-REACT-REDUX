import { useFilter } from "../context/constant";
import Button from "./Button";

const style = {
  container: "flex gap-5",
  button:
    "px-4 !w-auto py-1 text-white bg-slate-600 text-xs transition-all rounded-xl sm:text-sm font-plus-jakarta-sans",
};
export const ButtonFilter = () => {
  const { filterState, setFilterState } = useFilter();
  return (
    <>
      <div className={style.container}>
        <Button
          onClick={(e) => setFilterState((prev) => "ALL")}
          className={`${style.button} ${
            filterState === "ALL" ? " bg-green-600 " : ""
          }hover:bg-green-700 active:bg-green-800`}>
          All
        </Button>
        <Button
          onClick={(e) => setFilterState((prev) => "COMPLETED")}
          className={`${style.button} ${
            filterState === "COMPLETED" ? "bg-green-600" : ""
          } hover:bg-green-700 active:bg-green-800`}>
          COMPLETED
        </Button>
        <Button
          onClick={(e) => setFilterState((prev) => "ACTIVE")}
          className={`${style.button}  ${
            filterState === "ACTIVE" ? " !bg-green-600 " : ""
          }hover:bg-green-700 active:bg-green-800`}>
          ACTIVE
        </Button>
      </div>
    </>
  );
};

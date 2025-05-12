import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <div className="@container/main flex flex-1 flex-col gap-2">
            <Outlet></Outlet>
        </div>
    )

}
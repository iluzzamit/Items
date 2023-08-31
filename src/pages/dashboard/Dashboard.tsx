import { StyledDashboard } from "./Dashboard.style";
import { DashboardItems } from "./DashboardItems";

export function Dashboard() {
    return (
        <StyledDashboard maxWidth={false}>
            <DashboardItems />
        </StyledDashboard>
    )
}
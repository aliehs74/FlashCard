import { Routes as RoutesProvider, Route } from "react-router-dom";
import { PublicView } from '../pages/PublicView';
import { Dashboard } from '../pages/Dashboard';

const Routes = () => {
    return (
        <RoutesProvider >
            <Route path="/" element={<PublicView />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </RoutesProvider>
    )
}

export default Routes
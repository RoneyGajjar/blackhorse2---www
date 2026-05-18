import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "./Button";
export default function MyApp() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <Button variant="secondary"
        className="font-display"
        data-cal-namespace="15min"
        data-cal-link="black-horse-associates-yce8pc/15min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>Book a Consultation</Button>;
};
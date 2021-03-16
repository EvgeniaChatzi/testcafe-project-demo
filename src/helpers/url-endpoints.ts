import { baseUrl } from "../fixtures/setup.json";

export function getEndpointForProfileOverview(customerId: number, otinanai: string): string {
    return `${baseUrl}/urlendpoint/v1/customer/${customerId}/${otinanai}`;
};
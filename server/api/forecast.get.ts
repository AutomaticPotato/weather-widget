import { ForeCastRequest } from "~/types/requests/ForecastRequest";
import { ForecastResponse } from "~/types/responses/ForecastResponse";

export default defineEventHandler(async (event) => {
  const { WEATHER_API_ENDPOINT: weatherApi } = useRuntimeConfig();
  const { latitude, longitude } = getQuery<ForeCastRequest>(event);

  try {
    const response = await $fetch<ForecastResponse>("/forecast", {
      baseURL: weatherApi,
      method: "get",
      query: {
        latitude,
        longitude,
        current: "temperature_2m,weather_code",
        daily: "weather_code,temperature_2m_max,temperature_2m_min",
      },
    });
    setResponseStatus(event, 200);
    response.locationName = "Groningen";
    return response;
  } catch (error) {
    setResponseStatus(event, 400);
  }
});

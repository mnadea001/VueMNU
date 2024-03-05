import axios, { AxiosError } from 'axios'
import type { RouteParamValue } from 'vue-router'
import type { Event } from '../types/event'
import type { Page } from '@/types/ page';

const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY
const API_URL_BASE: string = 'https://app.ticketmaster.com/discovery/v2/events';

interface EventsApiResponse {
  page: Page,
  _embedded: {
    events: Event[]
  }
}

export const fetchEvents = async (page: number = 1): Promise<EventsApiResponse> => {
  try {
    let url = `${API_URL_BASE}.json?keyword=yoga&source=universe&apikey=${API_KEY}&sort=date,asc&size=10&page=${page}`;
    const { data } = await axios.get<EventsApiResponse>(url);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      handleUnexpectedError(error);
    }
    // Add a return statement here to handle the case where an error occurs
    return Promise.reject(error); // or return undefined;
  }
}

export const fetchEventById = async (id: string | RouteParamValue[]): Promise<Event> => {
  try {
    const url: string = `${API_URL_BASE}/${id}?apikey=${API_KEY}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      handleUnexpectedError(error);
    }
    // Add a return statement here to handle the case where an error occurs
    return Promise.reject(error); // or return undefined;
  }
}

const handleAxiosError = (error: AxiosError): void => {
  console.error('Une erreur est survenue lors de la récupération des données', error);
}

const handleUnexpectedError = (error: unknown): void => {
  console.error('Une erreur inattendue est survenue', error);
}
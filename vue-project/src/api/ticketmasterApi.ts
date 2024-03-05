import axios, { AxiosError } from 'axios'
import type { RouteParamValue } from 'vue-router'
import type { Page } from '../types/page'
import type { Event } from '../types/event'

const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY
const API_URL_BASE: string = 'https://app.ticketmaster.com/discovery/v2/events';

interface EventsApiResponse {
  page: Page,
  _embedded: {
    events: Event[]
  }
}

export const fetchEvents = async (keyword?: string, page: number = 1): Promise<EventsApiResponse> => {
  try {
    let url = `${API_URL_BASE}.json?keyword=yoga&source=universe&apikey=${API_KEY}&sort=date,asc&size=10&page=${page}`;
    if (keyword) {
      url += `&keyword=${keyword}`;
    }

    const { data} = await axios.get<EventsApiResponse>(url);

    return data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      handleUnexpectedError(error);
    }
  }
}

export const fetchEventById = async (id: string | RouteParamValue[]): Promise<Event> => {
  try {
    const url: string = `${API_URL_BASE}/${id}?apikey=${API_KEY}`;
    const { data} = await axios.get(url);
    return data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      handleUnexpectedError(error);
    }
  }
}

const handleAxiosError = (error: AxiosError): void => {
  console.error('Une erreur est survenue lors de la récupération des données', error);
}

const handleUnexpectedError = (error: unknown): void => {
  console.error('Une erreur inattendue est survenue', error);
}
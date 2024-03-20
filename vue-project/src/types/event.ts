export interface Event {
  name: string;
  type: string;
  id: string;
  test: boolean;
  description: string;
  url: string;
  locale: string;
  images: Image[];
  place: {
    city: {
      name: string;
    };
    country: {
      name: string;
      countryCode: string;
    };
    address: {
      line1: string;
    };
    location: {
      longitude: number;
      latitude: number;
    };
    state: {
      name: string;
      stateCode: string;
    };
  };
  sales: {
    public: {
      startDateTime: string;
      startTBD: boolean;
      startTBA: boolean;
      endDateTime: string;
    };
  };
  dates: {
    access: {
      startDateTime: string;
      startApproximate: boolean;
      endDateTime: string;
      endApproximate: boolean;
    };
    start: {
      localDate: string;
      localTime: string;
      dateTime: string;
      dateTBD: boolean;
      dateTBA: boolean;
      timeTBA: boolean;
      noSpecificTime: boolean;
    };
    end: {
      localTime: string;
      dateTime: string;
      approximate: boolean;
      noSpecificTime: boolean;
    };
    timezone: string;
    status: {
      code: string;
    };
    spanMultipleDays: boolean;
  };
  priceRanges: {
    currency: string;
  }[];
  _links: {
    self: {
      href: string;
    };
  };
}

export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

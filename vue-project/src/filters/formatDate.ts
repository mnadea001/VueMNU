export const formatDate = (value: string): string => {
    const date: Date = new Date(value);
    return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
  };
  
  
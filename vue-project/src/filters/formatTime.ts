export const formatTime = (value: string): string => {
    const timeComponents: string[] = value.split(':');
    const hour: number = parseInt(timeComponents[0]);
    const minute: string = timeComponents[1];
  
    return `${hour}h${minute}`;
  }
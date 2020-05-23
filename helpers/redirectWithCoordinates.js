import Router from 'next/router'

export function redirectWithCoordinates(url, coordinates) {
  const { latitude, longitude, altitude } = coordinates;
  Router.push(`${url}?lat=${latitude}&lon=${longitude}$alt=${altitude}`);
}

export function getCurrentPosition(options = {}) {
  // Returns position object (https://developer.mozilla.org/es/docs/Web/API/GeolocationPosition)
  navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});
  console.log("about to ask for geo position");

  return new Promise((resolve, reject) => {
    console.log("asking for geo position");
    const options = {
      timeout: 5 * 1000,  // x * seconds t wait until if not response is given is considered error
      maximumAge: 15 * 1000, // How long ago captured locations is valid still to use
      enableHighAccuracy: true
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}


export function _getCurrentPosition(options = {}) {
  // Returns position object (https://developer.mozilla.org/es/docs/Web/API/GeolocationPosition)
  navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});
  console.log("about to ask for geo position");

  return new Promise((resolve, reject) => {
    console.log("asking for geo position");
    const options = {
      timeout: 5 * 1000,  // x * seconds t wait until if not response is given is considered error
      maximumAge: 5 * 1000, // How long ago captured locations is valid still to use
      enableHighAccuracy: true
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

export async function isGeoPermitted() {
  let result = false;
  try {
    const permission = await navigator.permissions.query({
      name: "geolocation",
    });
    result = permission.state === "granted";
  } catch (error) {
    result = "geolocation" in window;
    console.error(error);
  } finally {
    return result;
  }
}

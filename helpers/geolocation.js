export function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function askForGeo() {
  try {
    console.log("trying");
    const { coords } = await getCurrentPosition();
    const { latitude, longitude } = coords;
    console.log(longitude, latitude);

    // Handle coordinates
  } catch (error) {
    // Handle error
    console.error(error);
  }
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

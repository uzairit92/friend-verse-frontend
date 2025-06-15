
import React, { useEffect, useRef, useState } from "react";
import { Compass, MapPin, Globe2, LocateFixed, AlertTriangle, Home, Locate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import clsx from "clsx";

// Haversine distance between two coords (in km)
function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat/2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon/2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Qibla from location: returns bearing from North (in degrees)
function getQiblaAngle(lat: number, lon: number) {
  // Kaaba coordinates
  const kaabaLat = 21.4225, kaabaLon = 39.8262;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const toDeg = (rad: number) => (rad * 180) / Math.PI;
  const dLon = toRad(kaabaLon - lon);
  const lat1 = toRad(lat);
  const lat2 = toRad(kaabaLat);

  const y = Math.sin(dLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  let brng = Math.atan2(y, x);
  brng = toDeg(brng);
  return (brng + 360) % 360;
}

// Try to get city & country from coordinates (API - fallback only)
async function reverseGeocode(lat: number, lon: number): Promise<string> {
  try {
    const resp = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );
    if (!resp.ok) return "";
    const data = await resp.json();
    // Most friendly: city, town, village, and country
    return (
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      data.address?.state ||
      data.display_name?.split(",")[0] ||
      "Unknown"
    ) + (data.address?.country ? `, ${data.address.country}` : "");
  } catch {
    return "";
  }
}

const MAKKAH_COORDS = { lat: 21.4225, lon: 39.8262 };

type ManualLoc = { city?: string; lat?: number; lon?: number };

const offlineKey = "qibla:cached-location";

const QiblaFinderCard: React.FC = () => {
  // Main state
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [city, setCity] = useState<string>("");
  const [manual, setManual] = useState<ManualLoc | null>(null);
  const [distance, setDistance] = useState<number>(0);
  const [angle, setAngle] = useState<number | null>(null);
  const [userHeading, setUserHeading] = useState<number>(0); // From DeviceOrientation
  const [compassSupported, setCompassSupported] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [offline, setOffline] = useState(false);

  // Manual location modal/fields (inline, for simplicity)
  const cityInputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState({ city: "", lat: "", lon: "" });

  // Geolocate user or recover from offline
  useEffect(() => {
    let ignore = false;
    async function getLocation() {
      if (!navigator.onLine) {
        setOffline(true);
        // Load cached if exists
        const cached = localStorage.getItem(offlineKey);
        if (cached) {
          const j = JSON.parse(cached);
          setCoords({ lat: j.lat, lon: j.lon });
          setCity(j.city || "");
        }
        setError("Offline — using last known location if available.");
        return;
      }
      setOffline(false);
      setError(null);
      if (manual && manual.lat && manual.lon) {
        setCoords({ lat: manual.lat, lon: manual.lon });
        setCity(manual.city || "");
        return;
      }
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          if (ignore) return;
          const { latitude, longitude } = pos.coords;
          setCoords({ lat: latitude, lon: longitude });
          // Cache for offline
          localStorage.setItem(
            offlineKey,
            JSON.stringify({ lat: latitude, lon: longitude })
          );
          // Reverse geocode
          setCity(await reverseGeocode(latitude, longitude));
        },
        () => {
          setError("Unable to get location. Enter manually.");
        }
      );
    }
    getLocation();
    return () => {
      ignore = true;
    };
    // Only re-run if manual location changes, or network changes
    // eslint-disable-next-line
  }, [manual, navigator.onLine]);

  // Qibla angle/distance calculation
  useEffect(() => {
    if (coords) {
      const qAngle = getQiblaAngle(coords.lat, coords.lon);
      setAngle(qAngle);
      setDistance(getDistanceKm(coords.lat, coords.lon, MAKKAH_COORDS.lat, MAKKAH_COORDS.lon));
    }
  }, [coords]);

  // Device compass support
  useEffect(() => {
    let handler: any = null;
    function handleOrientation(event: DeviceOrientationEvent) {
      // Some devices: alpha is compass heading
      const h = event.alpha; // 0 = North
      if (typeof h === "number") {
        setCompassSupported(true);
        setUserHeading(h);
      }
    }
    // iOS 13+: Ask permission
    if (
      typeof window !== "undefined" &&
      "ondeviceorientationabsolute" in window
    ) {
      window.addEventListener("deviceorientationabsolute", handleOrientation);
      handler = handleOrientation;
    } else if ("ondeviceorientation" in window) {
      window.addEventListener("deviceorientation", handleOrientation);
      handler = handleOrientation;
    }
    return () => {
      if (handler) {
        window.removeEventListener("deviceorientation", handler);
      }
    };
  }, []);

  // Simple local time at location
  function getLocalTime() {
    try {
      if (coords) {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
    } catch {}
    return "";
  }

  // UI callbacks
  function handleManualEntry(e: React.FormEvent) {
    e.preventDefault();
    let lat = parseFloat(inputs.lat);
    let lon = parseFloat(inputs.lon);
    if (isNaN(lat) || isNaN(lon) || !inputs.city) {
      setError("Invalid manual location");
      return;
    }
    setManual({ city: inputs.city, lat, lon });
    setInputs({ city: "", lat: "", lon: "" });
    setError(null);
  }

  // Angle to rotate pointer (Qibla minus user's heading if compass available)
  const pointerAngle = angle !== null
    ? compassSupported
      ? angle - userHeading
      : angle
    : 0;

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="mb-4">
      <Card className="shadow-md">
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-yellow-600" />
            <CardTitle className="text-lg font-semibold">Qibla Finder</CardTitle>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              {open ? (
                <span className="sr-only">Collapse</span>
              ) : (
                <span className="sr-only">Expand</span>
              )}
              <svg
                className={clsx("transition-transform", open ? "rotate-90" : "")}
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path d="M7 7l3 3 3-3" stroke="#555" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Button>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="space-y-4">
            {/* Qibla Compass */}
            <div className="relative mx-auto w-36 h-36 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-amber-200 bg-gradient-to-br from-emerald-50 to-yellow-50 shadow-inner flex items-center justify-center">
                {/* North marker */}
                <div className="absolute top-1/2 left-1/2 w-1 h-7 bg-red-500 rounded-full -translate-x-1/2 -translate-y-full" />
                {/* Qibla pointer (rotates) */}
                <div
                  className="absolute left-1/2 bottom-1/2 origin-bottom"
                  style={{
                    transform: `rotate(${pointerAngle}deg) translateY(8px)`,
                  }}
                >
                  <div className="w-2 h-16 bg-yellow-500 rounded-t-full shadow-lg animate-pulse" />
                  <div className="w-4 h-4 rounded-full bg-emerald-500 mx-auto mt-1 shadow" />
                </div>
                {/* Compass labels */}
                <span className="absolute left-1/2 top-1 text-xs text-gray-600 -translate-x-1/2">
                  N
                </span>
                <span className="absolute right-1 top-1/2 text-xs text-gray-600 -translate-y-1/2">
                  E
                </span>
                <span className="absolute left-1/2 bottom-1 text-xs text-gray-600 -translate-x-1/2">
                  S
                </span>
                <span className="absolute left-1 top-1/2 text-xs text-gray-600 -translate-y-1/2">
                  W
                </span>
              </div>
              {/* Center Kaaba icon */}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl shadow-lg">
                🕋
              </span>
            </div>
            <div className="text-center space-y-1">
              <div>
                <span className="font-medium text-emerald-800">
                  Qibla:{" "}
                  {angle !== null ? (
                    <>
                      <span className="text-lg font-bold">{Math.round(angle)}&deg;</span> from N
                    </>
                  ) : (
                    <span className="text-gray-500">Calculating...</span>
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center text-xs text-gray-500">
                <MapPin className="w-4 h-4" />
                {city
                  ? city
                  : coords
                  ? `${coords.lat.toFixed(2)}, ${coords.lon.toFixed(2)}`
                  : "Locating..."}
              </div>
              <div className="flex justify-center gap-3 text-xs mt-1">
                <span>
                  <LocateFixed className="inline w-4 h-4 mr-1" />
                  {distance ? `${distance.toFixed(0)} km to Makkah` : "—"}
                </span>
                <span>
                  <Globe2 className="inline w-4 h-4 mr-1" />
                  {getLocalTime()}
                </span>
              </div>
            </div>
            {error && (
              <div className="bg-amber-50 border border-amber-200 text-amber-900 py-1 px-2 rounded flex items-center gap-2 text-xs">
                <AlertTriangle className="w-4 h-4" /> {error}
              </div>
            )}
            {/* Manual/location override */}
            <form className="space-y-2" onSubmit={handleManualEntry}>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  ref={cityInputRef}
                  placeholder="City name"
                  className="flex-1 px-2 py-1 rounded border border-gray-200"
                  value={inputs.city}
                  onChange={(e) =>
                    setInputs((inp) => ({ ...inp, city: e.target.value }))
                  }
                  autoComplete="off"
                />
                <input
                  type="text"
                  placeholder="Lat"
                  className="w-20 px-2 py-1 rounded border border-gray-200"
                  value={inputs.lat}
                  onChange={(e) =>
                    setInputs((inp) => ({ ...inp, lat: e.target.value }))
                  }
                  inputMode="decimal"
                  autoComplete="off"
                />
                <input
                  type="text"
                  placeholder="Lon"
                  className="w-20 px-2 py-1 rounded border border-gray-200"
                  value={inputs.lon}
                  onChange={(e) =>
                    setInputs((inp) => ({ ...inp, lon: e.target.value }))
                  }
                  inputMode="decimal"
                  autoComplete="off"
                />
                <Button type="submit" variant="secondary" size="sm" className="ml-1">Use</Button>
              </div>
              <div className="text-xs text-gray-400 flex gap-2 items-center">
                <Home className="w-3 h-3" /> Manual input if GPS unavailable
              </div>
            </form>
            {/* Airplane Mode badge */}
            {(offline || error) && (
              <div className="flex gap-1 text-xs items-center text-blue-700 mt-1">
                ✈️ <span>Airplane/travel mode enabled</span>
              </div>
            )}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default QiblaFinderCard;


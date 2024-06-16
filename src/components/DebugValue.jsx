import { useDebugValue, useSyncExternalStore } from "react";

function subscribeOnlineStatus(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribeOnlineStatus,
    () => navigator.onLine,
    () => true
  );
  useDebugValue(isOnline ? "Online" : "Offline");
  return isOnline;
}

export default function DebugValue() {
  const isOnline = useOnlineStatus();

  return <div>isOnline: {String(isOnline)}</div>;
}

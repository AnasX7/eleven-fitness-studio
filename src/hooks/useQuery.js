'use client';

import { useEffect, useMemo, useState } from 'react';

export function useQuery(url) {
  const [result, setResult] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const request = useMemo(() => ({ url, attempt }), [url, attempt]);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(request.url, { signal: controller.signal });
        if (!response.ok) throw new Error('Request failed.');
        const data = await response.json();
        if (!controller.signal.aborted) setResult({ request, data, error: null });
      } catch (error) {
        if (!controller.signal.aborted) setResult({ request, data: undefined, error });
      }
    }

    load();
    return () => controller.abort();
  }, [request]);

  // Previous responses must not appear while a new URL or retry is loading.
  const current = result?.request === request;

  return {
    data: current ? result.data : undefined,
    isLoading: !current,
    error: current ? result.error : null,
    refetch: () => setAttempt((previous) => previous + 1),
  };
}

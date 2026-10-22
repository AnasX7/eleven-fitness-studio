'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useQuery(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const activeRequest = useRef(null);

  const refetch = useCallback(async () => {
    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;

    setData(undefined);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error('Request failed.');
      const result = await response.json();
      if (!controller.signal.aborted) setData(result);
    } catch (error) {
      if (!controller.signal.aborted) setError(error);
    } finally {
      if (!controller.signal.aborted) setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    // Initial loading and manual retry deliberately use the same state reset.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refetch();
    return () => activeRequest.current?.abort();
  }, [refetch]);

  return { data, isLoading, error, refetch };
}

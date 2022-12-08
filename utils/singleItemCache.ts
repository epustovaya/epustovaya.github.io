export function singleItemCache<T>(
  ttl: number,
  worker: () => Promise<T>,
  log?: (message: string) => void
): () => Promise<T> {
  let data: T;
  let expiresAt: number;

  return async () => {
    if (expiresAt && expiresAt > Date.now()) {
      if (log) {
        log('returned cached data');
      }

      return Promise.resolve(data);
    }

    if (log) {
      log('requesting data from the API server');
    }

    try {
      data = await worker();
      expiresAt = Date.now() + ttl * 1000;

      if (log) {
        log('updated cache');
      }

      return data;
    } catch (err) {
      if (log) {
        log('error while getting data');
        log(err);
      }

      if (data) {
        if (log) {
          log('returned stale data');
        }

        return Promise.resolve(data);
      }

      return Promise.reject(err);
    }
  };
}

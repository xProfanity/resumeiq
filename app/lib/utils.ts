export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 bytes";

  const k = 1024;
  const sizes = ["bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  const size = `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;

  return size;
}

export function generateUUID() {
  crypto.randomUUID();
}
